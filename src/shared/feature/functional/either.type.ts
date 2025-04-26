import type { Failure } from '@shared/feature/functional/_failure.object';
import type { Success } from '@shared/feature/functional/_success.object';
import type { BaseError } from '@shared/feature/functional/error/base.error';

export type Either<E extends BaseError, T> = Failure<E> | Success<T>;
