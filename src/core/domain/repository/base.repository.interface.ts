import type { DeepPartial } from '@base/core/domain/repository/type/deep-partial.type';
import type { Guid } from '@core/domain/entity/base/value-object/guid.value-object';
import type { EntityNotFoundError } from '@core/domain/repository/error/entity-not-found.error';
import type { QueryExecutionError } from '@core/domain/repository/error/query-execution.error';
import type { FindOptionsInterface } from '@core/domain/repository/interface/find-options.interface';
import type { Either } from '@shared/feature/functional/type/either.type';
import type { Empty } from '@shared/feature/functional/type/emtpy.type';

export interface BaseRepositoryInterface<T> {
  create(data: T): Promise<Either<QueryExecutionError, Empty>>;

  update(
    id: Guid,
    data: DeepPartial<T>,
  ): Promise<Either<EntityNotFoundError | QueryExecutionError, Empty>>;

  delete(
    id: Guid,
  ): Promise<Either<EntityNotFoundError | QueryExecutionError, Empty>>;

  findOne(
    options: FindOptionsInterface<T>,
  ): Promise<Either<EntityNotFoundError | QueryExecutionError, T>>;

  find(
    options: FindOptionsInterface<T>,
  ): Promise<Either<QueryExecutionError, T[]>>;

  // list(
  //   options: ListOptionsInterface,
  // ): Promise<Either<QueryExecutionError, ListedResultInterface<T>>>;
}
