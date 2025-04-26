import type { Either } from '@shared/feature/functional/either.type';
import type { BaseError } from '@shared/feature/functional/error/base.error';

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

  flatMap<U, F extends BaseError>(
    fn: (value: T) => Either<F, U>,
  ): Either<F, U> {
    return fn(this.value);
  }

  getOrElse(_defaultValue: T): T {
    return this.value;
  }
}
