import type { BaseError } from '@shared/feature/functional/error/base.error';
import type { Either } from '@shared/feature/functional/type/either.type';

export class Failure<E extends BaseError> {
  protected readonly _type: string = Failure.name;

  constructor(readonly error: E) {}

  isFailure(): this is Failure<E> {
    return true;
  }

  isSuccess(): boolean {
    return false;
  }

  map<U>(_fn: (value: never) => U): Failure<E> {
    return this;
  }

  flatMap<U, F extends BaseError>(
    _fn: (value: never) => Either<F, U>,
  ): Failure<E> {
    return this;
  }

  getOrElse<U>(defaultValue: U): U {
    return defaultValue;
  }
}
