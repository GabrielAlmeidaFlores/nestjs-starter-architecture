import { InvalidInputError } from '@base/core/domain/error/invalid-input.error';

export class InvalidEmailError extends InvalidInputError {
  protected override readonly _type = InvalidEmailError.name;
}
