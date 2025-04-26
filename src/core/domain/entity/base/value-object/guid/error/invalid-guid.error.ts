import { InvalidInputError } from '@shared/feature/functional/error/invalid-input.error';

export class InvalidGuidError extends InvalidInputError {
  protected readonly _type = InvalidGuidError.name;
}
