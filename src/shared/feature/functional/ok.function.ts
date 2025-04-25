import { Success } from '@base/shared/feature/functional/success.object';

import type { Either } from '@base/shared/feature/functional/either.type';

export const Ok = <T>(value: T): Either<never, T> => new Success(value);
