import { BaseError } from '@base/shared/error/_base.error';

export abstract class InvalidInputError extends BaseError {
  public readonly source = InvalidInputError.name;
}
