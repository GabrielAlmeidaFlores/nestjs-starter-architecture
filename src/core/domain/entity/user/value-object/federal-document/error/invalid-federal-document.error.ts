import { InvalidInputError } from '@base/shared/error/invalid-input.error';

export class InvalidFederalDocumentError extends InvalidInputError {
  protected readonly _type = InvalidFederalDocumentError.name;
}
