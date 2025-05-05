import { BaseError } from '@shared/feature/application/error/base.error';

export abstract class UnexpectedError extends BaseError {
  public override readonly message: string;
  public override readonly stack: string;

  public constructor(message?: string, stack?: string) {
    super();

    this.message = message ?? '';
    this.stack = stack ?? new Error().stack ?? '';
  }
}
