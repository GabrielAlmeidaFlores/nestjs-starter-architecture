import { EntityNotFoundError } from '@core/domain/repository/error/entity-not-found.error';
import { QueryExecutionError } from '@core/domain/repository/error/query-execution.error';
import { Fail } from '@shared/feature/functional/function/fail.function';
import { Ok } from '@shared/feature/functional/function/ok.function';
import { isFail } from '@shared/feature/functional/guard/is-fail.guard';

import type { Guid } from '@core/domain/entity/base/value-object/guid.value-object';
import type { BaseRepositoryInterface } from '@core/domain/repository/base.repository.interface';
import type { FindOptionsInterface } from '@core/domain/repository/interface/find-options.interface';
import type { DeepPartial } from '@core/domain/repository/type/deep-partial.type';
import type { BaseTypeOrmEntity } from '@infra/database/implementation/typeorm/entity/base/base.typeorm.entity';
import type { Either } from '@shared/feature/functional/type/either.type';
import type { Empty } from '@shared/feature/functional/type/emtpy.type';
import type {
  FindOneOptions,
  FindOptionsOrder,
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

export abstract class BaseTypeOrmRepository<T extends BaseTypeOrmEntity>
  implements BaseRepositoryInterface<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: T): Promise<Either<QueryExecutionError, Empty>> {
    try {
      const newData = this.entity.create(data);

      await this.entity.save(newData);

      return Ok();
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async update(
    id: Guid,
    data: DeepPartial<T>,
  ): Promise<Either<EntityNotFoundError | QueryExecutionError, Empty>> {
    try {
      const findEntity = await this.findOne({
        where: { id: id.value } as DeepPartial<T>,
      });

      if (isFail(findEntity)) {
        return Fail(findEntity.value);
      }

      Object.assign(findEntity, data);

      await this.entity.save(findEntity.value);

      return Ok();
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async delete(
    id: Guid,
  ): Promise<Either<EntityNotFoundError | QueryExecutionError, Empty>> {
    try {
      const findEntity = await this.findOne({
        where: { id: id.value } as DeepPartial<T>,
      });

      if (isFail(findEntity)) {
        return Fail(findEntity.value);
      }

      await this.entity.softDelete(id.value);

      return Ok();
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async findOne(
    options: FindOptionsInterface<T>,
  ): Promise<Either<QueryExecutionError | EntityNotFoundError, T>> {
    try {
      const typeormOptions: FindOneOptions<T> = {};

      if (options.where) {
        typeormOptions.where = options.where as
          | FindOptionsWhere<T>
          | FindOptionsWhere<T>[];
      }

      if (options.select) {
        typeormOptions.select = options.select as FindOptionsSelect<T>;
      }

      if (options.relations) {
        typeormOptions.relations = options.relations as FindOptionsRelations<T>;
      }

      if (options.order) {
        typeormOptions.order = options.order as FindOptionsOrder<T>;
      }

      const entity = await this.entity.findOne(typeormOptions);

      if (!entity) {
        return Fail(new EntityNotFoundError());
      }

      return Ok(entity);
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async find(
    options: FindOptionsInterface<T>,
  ): Promise<Either<QueryExecutionError, T[]>> {
    try {
      const typeormOptions: FindOneOptions<T> = {};

      if (options.where) {
        typeormOptions.where = options.where as
          | FindOptionsWhere<T>
          | FindOptionsWhere<T>[];
      }

      if (options.select) {
        typeormOptions.select = options.select as FindOptionsSelect<T>;
      }

      if (options.relations) {
        typeormOptions.relations = options.relations as FindOptionsRelations<T>;
      }

      if (options.order) {
        typeormOptions.order = options.order as FindOptionsOrder<T>;
      }

      const entity = await this.entity.find(typeormOptions);

      return Ok(entity);
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: unknown): Either<QueryExecutionError, never> {
    return Fail(
      new QueryExecutionError(
        error instanceof Error ? error.message : undefined,
      ),
    );
  }
}
