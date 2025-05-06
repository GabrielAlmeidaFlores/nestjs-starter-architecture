import { InvalidInputError } from '@core/domain/error/invalid-input.error';

export class InvalidGuidError extends InvalidInputError {
  protected readonly _type = InvalidGuidError.name;
}
