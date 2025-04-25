import { InvalidInputError } from '@base/core/domain/error/invalid-input.error';
import { Fail } from '@base/shared/feature/functional/fail.function';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { Either } from '@base/shared/feature/functional/either.type';

export class Email {
  public readonly value: string;

  protected readonly _type = Email.name;

  private constructor(value: string) {
    if (!Email.isValid(value)) {
      throw new InvalidInputError(`Invalid ${this._type}: ${value}`);
    }
    this.value = value;
  }

  static create(value: string): Either<InvalidInputError, Email> {
    if (!Email.isValid(value)) {
      return Fail(new InvalidInputError(`Invalid ${this.name}: ${value}`));
    }

    return Ok(new Email(value));
  }

  static isValid(value: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value);
  }

  public equals(other: Email): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
