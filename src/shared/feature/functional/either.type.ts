import type { BaseError } from '@shared/feature/functional/error/base.error';
import type { Failure } from '@shared/feature/functional/failure.object';
import type { Success } from '@shared/feature/functional/success.object';

export type Either<E extends BaseError, T> = Failure<E> | Success<T>;
