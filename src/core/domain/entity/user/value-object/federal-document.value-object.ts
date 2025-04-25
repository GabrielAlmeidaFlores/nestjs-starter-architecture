import { InvalidInputError } from '@base/core/domain/error/invalid-input.error';
import { Fail } from '@base/shared/feature/functional/fail.function';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { Either } from '@base/shared/feature/functional/either.type';

export class FederalDocument {
  public readonly value: string;

  protected readonly _type = FederalDocument.name;

  private constructor(value: string) {
    if (!FederalDocument.isValid(value)) {
      throw new InvalidInputError(`Invalid ${this._type}: ${value}`);
    }
    this.value = value;
  }

  static create(value: string): Either<InvalidInputError, FederalDocument> {
    if (!FederalDocument.isValid(value)) {
      return Fail(new InvalidInputError(`Invalid ${this.name}: ${value}`));
    }

    return Ok(new FederalDocument(value));
  }

  static isValid(value: string): boolean {
    const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

    const rgRegex = /^[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-?[0-9Xx]{1}$/;

    return cpfRegex.test(value) || rgRegex.test(value);
  }

  public equals(other: FederalDocument): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
