import { Like } from 'typeorm';

import { ListedData } from '@core/domain/repository/object/listed/listed-data.object';

import type { ListData } from '@core/domain/repository/object/list/list-data.object';
import type { BaseTypeormEntity } from '@infra/database/implementation/typeorm/entity/base/base.typeorm.entity';
import type { UserTypeormEntity } from '@infra/database/implementation/typeorm/entity/user/user.typeorm.entity';
import type {
  DeepPartial,
  FindManyOptions,
  Repository,
  EntityMetadata,
  FindOptionsWhere,
  FindOptionsOrder,
  FindOneOptions,
} from 'typeorm';
import type { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseTypeormRepository<T extends BaseTypeormEntity> {
  protected constructor(private readonly repository: Repository<T>) {}

  protected async create(data: DeepPartial<T>): Promise<void> {
    const newData = this.repository.create(data);
    await this.repository.save(newData);
  }

  protected async update(
    id: string,
    data: QueryDeepPartialEntity<T>,
  ): Promise<void> {
    await this.repository.update(id, data);
  }

  protected async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  protected async findOne(options: FindOneOptions<T>): Promise<T | null> {
    return await this.repository.findOne(options);
  }

  protected async find(options: FindManyOptions<T>): Promise<Array<T>> {
    return await this.repository.find(options);
  }

  protected async list(
    listBaseDto: ListData,
    options?: FindManyOptions<T>,
  ): Promise<ListedData<T>> {
    const order = this.generateOrder(listBaseDto.sortField);
    const where = this.generateWhere(listBaseDto.field, listBaseDto.search);
    const skip = (listBaseDto.page - 1) * listBaseDto.limit;

    const findAndCountOptions: FindManyOptions<T> = {
      take: listBaseDto.limit,
      skip,
      order,
    };

    findAndCountOptions.relations = options?.relations ?? {};

    findAndCountOptions.select = options?.select ?? {};

    findAndCountOptions.order = options?.order ?? order;

    findAndCountOptions.where = options?.where
      ? this.mergeWhereConditions(where, options.where)
      : where;

    const [data, count] =
      await this.repository.findAndCount(findAndCountOptions);

    return new ListedData({
      page: listBaseDto.page,
      limit: listBaseDto.limit,
      totalItems: count,
      resource: data,
    });
  }

  private generateOrder(sortField: string | null): FindOptionsOrder<T> {
    const order: FindOptionsOrder<T> = {};

    if (sortField !== null) {
      const ordination = sortField.startsWith('-') ? 'DESC' : 'ASC';
      const field = sortField.replace('-', '');

      if (field.includes('.')) {
        return this.generateOrderToSubObjects(field, ordination);
      }

      Object.assign(order, {
        [field]: ordination,
      });
    }

    return order;
  }

  private generateOrderToSubObjects(
    sortField: string,
    sortOrder: 'ASC' | 'DESC' = 'ASC',
  ): FindOptionsOrder<T> {
    const fields = sortField.split('.');

    const orderByType: Record<string, unknown> = {};
    let currentLevel: Record<string, unknown> = orderByType;

    for (const field of fields.slice(0, -1)) {
      const nextLevel: Record<string, unknown> = {};
      currentLevel[field] = nextLevel;
      currentLevel = nextLevel;
    }

    currentLevel[fields[fields.length - 1] as string] = sortOrder;

    return orderByType as FindOptionsOrder<T>;
  }

  private generateWhere(
    field: string | null,
    search: string | null,
  ): FindOptionsWhere<T>[] | FindOptionsWhere<T> {
    const where: FindOptionsWhere<T> = {};

    if (search !== null) {
      if (field !== null) {
        if (field.includes('.')) {
          const whereSubObjects = this.generateWhereToSearchSubObjects(
            field,
            search,
          );
          Object.assign(where, whereSubObjects);
          return where;
        }

        Object.assign(where, { [field]: Like(`%${search}%`) });
        return where;
      }

      type EntityKeysType = keyof BaseTypeormEntity | keyof UserTypeormEntity;

      const excludedColumns: EntityKeysType[] = [
        'id',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'password',
      ];

      const entity: EntityMetadata = this.repository.metadata;
      const columns: string[] = entity.columns
        .filter(
          (column) =>
            !excludedColumns.includes(column.propertyName as EntityKeysType),
        )
        .map((column) => column.propertyName);

      return columns.map(
        (column): FindOptionsWhere<T> =>
          ({
            [column]: Like(`%${search}%`),
          }) as FindOptionsWhere<T>,
      );
    }

    return where;
  }

  private mergeWhereConditions(
    a: FindOptionsWhere<T>[] | FindOptionsWhere<T>,
    b: FindOptionsWhere<T>[] | FindOptionsWhere<T>,
  ): FindOptionsWhere<T> | FindOptionsWhere<T>[] {
    const isArrayA = Array.isArray(a);
    const isArrayB = Array.isArray(b);

    if (!isArrayA && !isArrayB) {
      return { ...a, ...b };
    }

    const arrayA = isArrayA ? a : [a];
    const arrayB = isArrayB ? b : [b];

    return [...arrayA, ...arrayB];
  }

  private generateWhereToSearchSubObjects(
    field: string,
    search: string,
  ): FindOptionsWhere<T> {
    const fields: string[] = field.split('.');

    let subObjectsWhere: FindOptionsWhere<T> = {};
    for (let i = fields.length; i > 1; i--) {
      const parentKey = fields[i - 2];
      const childKey = fields[i - 1];

      if (typeof parentKey !== 'string' || typeof childKey !== 'string') {
        continue;
      }

      if (i === fields.length) {
        Object.assign(subObjectsWhere, {
          [parentKey]: { [childKey]: Like(`%${search}%`) },
        });
      } else {
        subObjectsWhere = {
          [parentKey]: subObjectsWhere,
        } as FindOptionsWhere<T>;
      }
    }

    return subObjectsWhere;
  }
}
