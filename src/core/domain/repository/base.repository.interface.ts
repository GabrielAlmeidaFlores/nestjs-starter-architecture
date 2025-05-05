import type { BaseEntity } from '@core/domain/entity/base/base.entity';
import type { FindOptionInterface } from '@core/domain/repository/interface/find/find-option.interface';
import type { ListOptionInterface } from '@core/domain/repository/interface/list/list-option.interface';
import type { ListedResultInterface } from '@core/domain/repository/interface/list/listed-result.interface';
import type { DeepPartialObjectType } from '@core/domain/repository/type/partial/deep-partial-object.type';
import type { DeepPartialType } from '@core/domain/repository/type/partial/deep-partial.type';
import type { Guid } from '@core/domain/value-object/guid/guid.value-object';
import type { InvalidInputError } from '@shared/feature/application/error/invalid-input.error';

export interface BaseRepositoryInterface<Entity extends BaseEntity> {
  create(data: Entity): Promise<void>;

  update(id: Guid, data: DeepPartialType<Entity>): Promise<void>;

  delete(id: Guid): Promise<void>;

  findOne(
    options: FindOptionInterface<Entity>,
  ): Promise<DeepPartialObjectType<Entity> | null>;

  findOneOrFail<E extends InvalidInputError>(
    options: FindOptionInterface<Entity>,
    throwError: E,
  ): Promise<DeepPartialObjectType<Entity>>;

  find(
    options: FindOptionInterface<Entity>,
  ): Promise<DeepPartialObjectType<Entity>[]>;

  list(
    options: ListOptionInterface,
  ): Promise<ListedResultInterface<DeepPartialObjectType<Entity>>>;
}
