import { InvalidEmailError } from '@core/domain/value-object/email/error/invalid-email.error';
import { Fail } from '@shared/feature/functional/function/fail.function';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { ValueObjectInterface } from '@core/domain/value-object/value-object.interface';
import type { EitherType } from '@shared/feature/functional/type/either.type';

export class Email implements ValueObjectInterface<Email> {
  protected readonly _type = Email.name;

  private constructor(public readonly value: string) {}

  public static create(value: string): EitherType<InvalidEmailError, Email> {
    if (!Email.isValid(value)) {
      return Fail(new InvalidEmailError());
    }

    return Ok(new Email(value));
  }

  private static isValid(value: string): boolean {
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
