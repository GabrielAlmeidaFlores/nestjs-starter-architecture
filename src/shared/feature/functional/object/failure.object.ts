import type { BaseError } from '@shared/feature/functional/error/base.error';
import type { EitherType } from '@shared/feature/functional/type/either.type';

export class Failure<E extends BaseError> {
  protected readonly _type: string = Failure.name;

  public constructor(public readonly error: E) {}

  public isFailure(): this is Failure<E> {
    return true;
  }

  public isSuccess(): boolean {
    return false;
  }

  public map<U>(_fn: (value: never) => U): Failure<E> {
    return this;
  }

  public flatMap<U, F extends BaseError>(
    _fn: (value: never) => EitherType<F, U>,
  ): Failure<E> {
    return this;
  }

  public getOrElse<U>(defaultValue: U): U {
    return defaultValue;
  }
}
