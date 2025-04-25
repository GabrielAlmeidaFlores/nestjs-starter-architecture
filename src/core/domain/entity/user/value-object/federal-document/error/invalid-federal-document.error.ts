import { InvalidInputError } from '@base/core/domain/error/invalid-input.error';

export class InvalidFederalDocumentError extends InvalidInputError {
  protected override readonly _type = InvalidFederalDocumentError.name;
}
