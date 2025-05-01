import type { BaseError } from '@shared/feature/functional/error/base.error';
import type { Failure } from '@shared/feature/functional/object/failure.object';
import type { Success } from '@shared/feature/functional/object/success.object';

export type EitherType<E extends BaseError, T> = Failure<E> | Success<T>;
