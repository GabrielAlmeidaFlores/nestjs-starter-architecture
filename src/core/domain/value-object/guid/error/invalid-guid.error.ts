import { InvalidInputError } from '@shared/feature/application/error/invalid-input.error';

export class InvalidGuidError extends InvalidInputError {
  protected readonly _type = InvalidGuidError.name;
}
