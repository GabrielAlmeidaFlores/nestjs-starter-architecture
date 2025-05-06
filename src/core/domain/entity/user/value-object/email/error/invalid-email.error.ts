import { InvalidInputError } from '@core/domain/error/invalid-input.error';

export class InvalidEmailError extends InvalidInputError {
  protected readonly _type = InvalidEmailError.name;
}
