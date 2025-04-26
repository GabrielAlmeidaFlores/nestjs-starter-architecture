import { BaseError } from '@shared/feature/functional/error/base.error';

export abstract class UnexpectedError extends BaseError {
  public abstract override stack: string;
}
