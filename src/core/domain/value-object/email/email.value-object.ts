import { InvalidEmailError } from '@core/domain/value-object/email/error/invalid-email.error';

import type { BaseValueObject } from '@core/domain/value-object/base/base.value-object';

export class Email implements BaseValueObject<Email> {
  protected readonly _type = Email.name;

  public constructor(public readonly value: string) {
    if (!this.isValid(value)) {
      throw new InvalidEmailError();
    }
  }

  public isValid(value: string): boolean {
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
