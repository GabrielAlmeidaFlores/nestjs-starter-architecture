import { InvalidInputError } from '@core/domain/error/invalid-input.error';

export class InvalidFederalDocumentError extends InvalidInputError {
  protected readonly _type = InvalidFederalDocumentError.name;
}
