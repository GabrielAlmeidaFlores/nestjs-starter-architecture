import type { Either } from '@base/shared/feature/functional/either.type';

export class Failure<E> {
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

  flatMap<U, F>(_fn: (value: never) => Either<F, U>): Failure<E> {
    return this;
  }

  getOrElse<U>(defaultValue: U): U {
    return defaultValue;
  }
}
