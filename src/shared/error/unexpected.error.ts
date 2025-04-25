import { BaseError } from '@base/shared/error/_base.error';

export abstract class UnexpectedError extends BaseError {
  public readonly source = UnexpectedError.name;
}
