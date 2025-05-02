import { InvalidInputError } from '@shared/feature/functional/error/invalid-input.error';

export class InvalidEmailError extends InvalidInputError {
  protected readonly _type = InvalidEmailError.name;
}
