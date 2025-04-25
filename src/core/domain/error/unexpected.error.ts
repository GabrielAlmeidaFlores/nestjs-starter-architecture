import { AbstractError } from '@base/core/domain/error/abstract.error';

export class UnexpectedError extends AbstractError {
  public readonly source = UnexpectedError.name;
  protected readonly _type = UnexpectedError.name;
}
