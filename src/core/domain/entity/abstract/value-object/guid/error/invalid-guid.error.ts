import { InvalidInputError } from '@base/core/domain/error/invalid-input.error';

export class InvalidGuidError extends InvalidInputError {
  protected override readonly _type = InvalidGuidError.name;
}
