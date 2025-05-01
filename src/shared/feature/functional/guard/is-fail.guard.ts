import type { BaseError } from '@shared/feature/functional/error/base.error';
import type { Failure } from '@shared/feature/functional/object/failure.object';
import type { EitherType } from '@shared/feature/functional/type/either.type';

export function isFail<E extends BaseError, T>(
  either: EitherType<E, T>,
): either is Failure<E> {
  return either.isFailure();
}
