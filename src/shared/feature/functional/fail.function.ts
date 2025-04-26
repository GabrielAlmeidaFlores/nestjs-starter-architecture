import { Failure } from '@base/shared/feature/functional/_failure.object';

import type { BaseError } from '@base/shared/error/base.error';
import type { Either } from '@base/shared/feature/functional/either.type';

export const Fail = <E extends BaseError>(error: E): Either<E, never> =>
  new Failure(error);
