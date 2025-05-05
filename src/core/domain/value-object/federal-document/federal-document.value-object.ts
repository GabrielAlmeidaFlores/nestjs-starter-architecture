import { InvalidFederalDocumentError } from '@core/domain/value-object/federal-document/error/invalid-federal-document.error';

import type { BaseValueObject } from '@core/domain/value-object/base/base.value-object';

export class FederalDocument implements BaseValueObject<FederalDocument> {
  protected readonly _type = FederalDocument.name;

  private constructor(public readonly value: string) {
    if (!this.isValid(value)) {
      throw new InvalidFederalDocumentError();
    }
  }

  public isValid(value: string): boolean {
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
