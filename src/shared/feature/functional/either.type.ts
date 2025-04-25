import type { Failure } from '@base/shared/feature/functional/_failure.object';
import type { Success } from '@base/shared/feature/functional/_success.object';

export type Either<E, T> = Failure<E> | Success<T>;
