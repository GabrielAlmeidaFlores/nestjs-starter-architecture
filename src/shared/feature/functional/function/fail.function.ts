import { Failure } from '@shared/feature/functional/object/failure.object';

import type { BaseError } from '@shared/feature/functional/error/base.error';
import type { Either } from '@shared/feature/functional/type/either.type';

export function Fail<E extends BaseError>(error: E): Either<E, never> {
  return new Failure(error);
}
