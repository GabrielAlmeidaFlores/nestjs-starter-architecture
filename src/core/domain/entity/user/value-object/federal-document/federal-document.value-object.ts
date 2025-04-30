import { InvalidFederalDocumentError } from '@core/domain/entity/user/value-object/federal-document/error/invalid-federal-document.error';
import { Fail } from '@shared/feature/functional/function/fail.function';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { Either } from '@shared/feature/functional/type/either.type';

export class FederalDocument {
  public readonly value: string;

  protected readonly _type = FederalDocument.name;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(
    value: string,
  ): Either<InvalidFederalDocumentError, FederalDocument> {
    if (!FederalDocument.isValid(value)) {
      return Fail(new InvalidFederalDocumentError());
    }

    return Ok(new FederalDocument(value));
  }

  public static isValid(value: string): boolean {
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
