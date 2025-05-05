import { InvalidInputError } from '@shared/feature/application/error/invalid-input.error';

export class InvalidFederalDocumentError extends InvalidInputError {
  protected readonly _type = InvalidFederalDocumentError.name;
}
