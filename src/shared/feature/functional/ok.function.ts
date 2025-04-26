import { Success } from '@shared/feature/functional/_success.object';

import type { Either } from '@shared/feature/functional/either.type';

export const Ok = <T>(value: T): Either<never, T> => new Success(value);
