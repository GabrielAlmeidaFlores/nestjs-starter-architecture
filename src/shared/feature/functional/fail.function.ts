import { Failure } from '@shared/feature/functional/failure.object';

import type { Either } from '@shared/feature/functional/either.type';
import type { BaseError } from '@shared/feature/functional/error/base.error';

export const Fail = <E extends BaseError>(error: E): Either<E, never> =>
  new Failure(error);
