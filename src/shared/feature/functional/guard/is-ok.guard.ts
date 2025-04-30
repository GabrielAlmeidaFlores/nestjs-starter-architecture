import type { BaseError } from '@shared/feature/functional/error/base.error';
import type { Success } from '@shared/feature/functional/object/success.object';
import type { Either } from '@shared/feature/functional/type/either.type';

export function isSuccess<E extends BaseError, T>(
  either: Either<E, T>,
): either is Success<T> {
  return either.isSuccess();
}
