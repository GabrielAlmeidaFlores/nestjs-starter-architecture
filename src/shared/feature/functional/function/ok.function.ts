import { Success } from '@shared/feature/functional/object/success.object';
import { Empty } from '@shared/feature/functional/type/emtpy.type';

import type { Either } from '@shared/feature/functional/type/either.type';

export function Ok(): Either<never, Empty>;
export function Ok<T>(value: T): Either<never, T>;

export function Ok<T>(value?: T): Either<never, T | Empty> {
  return new Success(value ?? Empty);
}
