import { InvalidEmailError } from '@core/domain/entity/user/value-object/email/error/invalid-email.error';

import type { ValueObjectInterface } from '@core/domain/entity/base/value-object/value-object.interface';

export class Email implements ValueObjectInterface<Email> {
  protected readonly _type = Email.name;

  public constructor(public readonly value: string) {
    if (!Email.isValid(value)) {
      throw new InvalidEmailError();
    }
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
