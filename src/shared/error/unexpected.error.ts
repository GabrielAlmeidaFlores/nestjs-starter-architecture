import { BaseError } from '@base/shared/error/base.error';

export abstract class UnexpectedError extends BaseError {
  public abstract override stack: string;
}
