import type { BaseEntity } from '@core/domain/entity/base/base.entity';
import type { EntityNotFoundError } from '@core/domain/repository/error/entity-not-found.error';
import type { QueryFailedError } from '@core/domain/repository/error/query-failed.error';
import type { ListOptionInterface } from '@core/domain/repository/interface/list/list-option.interface';
import type { ListedResultInterface } from '@core/domain/repository/interface/list/listed-result.interface';
import type { DeepPartialObjectType } from '@core/domain/repository/type/partial/deep-partial-object.type';
import type { DeepPartialType } from '@core/domain/repository/type/partial/deep-partial.type';
import type { Guid } from '@core/domain/value-object/guid/guid.value-object';
import type { EitherType } from '@shared/feature/functional/type/either.type';
import type { EmptyType } from '@shared/feature/functional/type/emtpy.type';

export interface BaseRepositoryInterface<Entity extends BaseEntity> {
  create(data: Entity): Promise<EitherType<QueryFailedError, EmptyType>>;

  update(
    id: Guid,
    data: DeepPartialType<Entity>,
  ): Promise<EitherType<EntityNotFoundError | QueryFailedError, EmptyType>>;

  delete(
    id: Guid,
  ): Promise<EitherType<EntityNotFoundError | QueryFailedError, EmptyType>>;

  list(
    options: ListOptionInterface,
  ): Promise<
    EitherType<
      QueryFailedError,
      ListedResultInterface<DeepPartialObjectType<Entity>>
    >
  >;
}
