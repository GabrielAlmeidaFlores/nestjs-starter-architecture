import { InvalidEmailError } from '@core/domain/entity/user/value-object/email/error/invalid-email.error';
import { Fail } from '@shared/feature/functional/fail.function';
import { Ok } from '@shared/feature/functional/ok.function';

import type { Either } from '@shared/feature/functional/either.type';

export class Email {
  public readonly value: string;

  protected readonly _type = Email.name;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): Either<InvalidEmailError, Email> {
    if (!Email.isValid(value)) {
      return Fail(new InvalidEmailError());
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
