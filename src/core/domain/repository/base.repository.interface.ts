import type { DeepPartialType } from '@base/core/domain/repository/type/deep-partial.type';
import type { Guid } from '@core/domain/entity/base/value-object/guid/guid.value-object';
import type { EntityNotFoundError } from '@core/domain/repository/error/entity-not-found.error';
import type { QueryFailedError } from '@core/domain/repository/error/query-failed.error';
import type { FindOptionInterface } from '@core/domain/repository/interface/find/find-option.interface';
import type { ListOptionInterface } from '@core/domain/repository/interface/list/list-option.interface';
import type { ListedResultInterface } from '@core/domain/repository/interface/list/listed-result.interface';
import type { EitherType } from '@shared/feature/functional/type/either.type';
import type { EmptyType } from '@shared/feature/functional/type/emtpy.type';

export interface BaseRepositoryInterface<T> {
  create(data: T): Promise<EitherType<QueryFailedError, EmptyType>>;

  update(
    id: Guid,
    data: DeepPartialType<T>,
  ): Promise<EitherType<EntityNotFoundError | QueryFailedError, EmptyType>>;

  delete(
    id: Guid,
  ): Promise<EitherType<EntityNotFoundError | QueryFailedError, EmptyType>>;

  findOne(
    options: FindOptionInterface<T>,
  ): Promise<EitherType<EntityNotFoundError | QueryFailedError, T>>;

  find(
    options: FindOptionInterface<T>,
  ): Promise<EitherType<QueryFailedError, T[]>>;

  list(
    options: ListOptionInterface,
  ): Promise<EitherType<QueryFailedError, ListedResultInterface<T>>>;
}
