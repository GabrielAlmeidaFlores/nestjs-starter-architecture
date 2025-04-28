import type { BaseEntity } from '@base/core/domain/entity/base/base.entity';
import type { DeepPartial } from '@base/core/domain/repository/type/deep-partial.type';
import type { EntityNotFoundError } from '@core/domain/repository/error/entity-not-found.error';
import type { ForeignKeyViolationError } from '@core/domain/repository/error/foreign-key-violation.type';
import type { QueryFailedError } from '@core/domain/repository/error/query-failed.error';
import type { UniqueConstraintError } from '@core/domain/repository/error/unique-constraint.error';
import type { FindOptionsInterface } from '@core/domain/repository/interface/find-options.interface';
import type { ListOptionsInterface } from '@core/domain/repository/interface/list-options.interface';
import type { ListedResultInterface } from '@core/domain/repository/interface/listed-result.interface';
import type { Either } from '@shared/feature/functional/either.type';

export interface BaseRepositoryInterface<T extends BaseEntity> {
  create(
    data: T,
  ): Either<
    ForeignKeyViolationError | UniqueConstraintError | QueryFailedError,
    Promise<void>
  >;

  update(
    where: DeepPartial<T>,
    data: DeepPartial<T>,
  ): Either<
    | EntityNotFoundError
    | ForeignKeyViolationError
    | UniqueConstraintError
    | QueryFailedError,
    Promise<void>
  >;

  delete(
    where: DeepPartial<T>,
  ): Either<EntityNotFoundError | QueryFailedError, Promise<void>>;

  findOne(
    options: FindOptionsInterface<T>,
  ): Either<EntityNotFoundError | QueryFailedError, Promise<T>>;

  find(
    options: FindOptionsInterface<T>,
  ): Either<QueryFailedError, Promise<T[]>>;

  list(
    options: ListOptionsInterface,
  ): Either<QueryFailedError, Promise<ListedResultInterface<T>>>;
}
