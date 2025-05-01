import type { BaseEntity } from '@base/core/domain/entity/base/base.entity';
import type { DeepPartial } from '@base/core/domain/repository/type/deep-partial.type';
import type { Guid } from '@core/domain/entity/base/value-object/guid.value-object';
import type { EntityNotFoundError } from '@core/domain/repository/error/entity-not-found.error';
import type { QueryFailedError } from '@core/domain/repository/error/query-failed.error';
import type { FindOption } from '@core/domain/repository/interface/find-option.interface';
import type { ListOption } from '@core/domain/repository/interface/list-option.interface';
import type { ListedResult } from '@core/domain/repository/interface/listed-result.interface';
import type { Either } from '@shared/feature/functional/type/either.type';
import type { Empty } from '@shared/feature/functional/type/emtpy.type';

export interface BaseRepository<T extends BaseEntity> {
  create(data: T): Promise<Either<QueryFailedError, Empty>>;

  update(
    id: Guid,
    data: DeepPartial<T>,
  ): Promise<Either<EntityNotFoundError | QueryFailedError, Empty>>;

  delete(
    id: Guid,
  ): Promise<Either<EntityNotFoundError | QueryFailedError, Empty>>;

  findOne(
    options: FindOption<T>,
  ): Promise<Either<EntityNotFoundError | QueryFailedError, T>>;

  find(options: FindOption<T>): Promise<Either<QueryFailedError, T[]>>;

  list(options: ListOption): Promise<Either<QueryFailedError, ListedResult<T>>>;
}
