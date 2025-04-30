import type { BaseError } from '@shared/feature/functional/error/base.error';
import type { Either } from '@shared/feature/functional/type/either.type';

export class Success<T> {
  protected readonly _type: string = Success.name;

  public constructor(public readonly value: T) {}

  public isFailure(): boolean {
    return false;
  }

  public isSuccess(): this is Success<T> {
    return true;
  }

  public map<U>(fn: (value: T) => U): Success<U> {
    return new Success(fn(this.value));
  }

  public flatMap<U, F extends BaseError>(
    fn: (value: T) => Either<F, U>,
  ): Either<F, U> {
    return fn(this.value);
  }

  public getOrElse(_defaultValue: T): T {
    return this.value;
  }
}
