import { InvalidFederalDocumentError } from '@core/domain/value-object/federal-document/error/invalid-federal-document.error';
import { Fail } from '@shared/feature/functional/function/fail.function';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { ValueObjectInterface } from '@core/domain/value-object/value-object.interface';
import type { EitherType } from '@shared/feature/functional/type/either.type';

export class FederalDocument implements ValueObjectInterface<FederalDocument> {
  protected readonly _type = FederalDocument.name;

  private constructor(public readonly value: string) {}

  public static create(
    value: string,
  ): EitherType<InvalidFederalDocumentError, FederalDocument> {
    if (!FederalDocument.isValid(value)) {
      return Fail(new InvalidFederalDocumentError());
    }

    return Ok(new FederalDocument(value));
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
