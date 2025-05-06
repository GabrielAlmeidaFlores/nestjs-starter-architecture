import { InvalidFederalDocumentError } from '@core/domain/entity/user/value-object/federal-document/error/invalid-federal-document.error';

import type { ValueObjectInterface } from '@core/domain/entity/base/value-object/value-object.interface';

export class FederalDocument implements ValueObjectInterface<FederalDocument> {
  protected readonly _type = FederalDocument.name;

  private constructor(public readonly value: string) {
    if (!FederalDocument.isValid(value)) {
      throw new InvalidFederalDocumentError();
    }
  }

  private static isValid(value: string): boolean {
    const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
    return cpfRegex.test(value);
  }

  public equals(other: FederalDocument): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
