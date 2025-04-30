import type { BaseEntity } from '@base/core/domain/entity/base/base.entity';
import type { DeepPartial } from '@base/core/domain/repository/type/deep-partial.type';
import type { Guid } from '@core/domain/entity/base/value-object/guid.value-object';
import type { EntityNotFoundError } from '@core/domain/repository/error/entity-not-found.error';
import type { QueryFailedError } from '@core/domain/repository/error/query-failed.error';
import type { FindOptionsInterface } from '@core/domain/repository/interface/find-options.interface';
import type { ListOptionsInterface } from '@core/domain/repository/interface/list-options.interface';
import type { ListedResultInterface } from '@core/domain/repository/interface/listed-result.interface';
import type { Either } from '@shared/feature/functional/type/either.type';
import type { Empty } from '@shared/feature/functional/type/emtpy.type';

export interface BaseRepositoryInterface<T extends BaseEntity> {
  create(data: T): Promise<Either<QueryFailedError, Empty>>;

  update(
    id: Guid,
    data: DeepPartial<T>,
  ): Promise<Either<EntityNotFoundError | QueryFailedError, Empty>>;

  delete(
    id: Guid,
  ): Promise<Either<EntityNotFoundError | QueryFailedError, Empty>>;

  findOne(
    options: FindOptionsInterface<T>,
  ): Promise<Either<EntityNotFoundError | QueryFailedError, T>>;

  find(
    options: FindOptionsInterface<T>,
  ): Promise<Either<QueryFailedError, T[]>>;

  list(
    options: ListOptionsInterface,
  ): Promise<Either<QueryFailedError, ListedResultInterface<T>>>;
}
