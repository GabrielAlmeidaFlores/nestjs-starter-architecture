import { InvalidInputError } from '@base/shared/error/invalid-input.error';

export class InvalidGuidError extends InvalidInputError {
  protected readonly _type = InvalidGuidError.name;
}
