import type { Failure } from '@base/shared/feature/functional/failure.object';
import type { Success } from '@base/shared/feature/functional/success.object';

export type Either<E, T> = Failure<E> | Success<T>;
