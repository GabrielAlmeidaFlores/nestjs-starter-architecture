import type { Either } from '@base/shared/feature/functional/either.type';

export class Success<T> {
  protected readonly _type: string = Success.name;

  constructor(readonly value: T) {}

  isFailure(): boolean {
    return false;
  }

  isSuccess(): this is Success<T> {
    return true;
  }

  map<U>(fn: (value: T) => U): Success<U> {
    return new Success(fn(this.value));
  }

  flatMap<U, F>(fn: (value: T) => Either<F, U>): Either<F, U> {
    return fn(this.value);
  }

  getOrElse(_defaultValue: T): T {
    return this.value;
  }
}
