import { BaseError } from '@base/shared/error/_base.error';

export abstract class NotFoundError extends BaseError {
  public readonly source = NotFoundError.name;
}
