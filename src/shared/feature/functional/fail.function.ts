import { Failure } from '@base/shared/feature/functional/failure.object';

import type { Either } from '@base/shared/feature/functional/either.type';

export const Fail = <E>(error: E): Either<E, never> => new Failure(error);
