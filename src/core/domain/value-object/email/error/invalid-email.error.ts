import { InvalidInputError } from '@shared/feature/application/error/invalid-input.error';

export class InvalidEmailError extends InvalidInputError {
  protected readonly _type = InvalidEmailError.name;
}
