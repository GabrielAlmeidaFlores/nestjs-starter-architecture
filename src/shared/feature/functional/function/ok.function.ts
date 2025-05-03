import { Success } from '@shared/feature/functional/object/success.object';
import { EmptyType } from '@shared/feature/functional/type/emtpy.type';

import type { EitherType } from '@shared/feature/functional/type/either.type';

export function Ok(): EitherType<never, EmptyType>;
export function Ok<T>(value: T): EitherType<never, T>;

export function Ok<T>(value?: T): EitherType<never, T | EmptyType> {
  return new Success(value ?? EmptyType);
}
