import { InvalidInputError } from '@base/shared/error/invalid-input.error';

export class InvalidEmailError extends InvalidInputError {
  protected readonly _type = InvalidEmailError.name;
}
