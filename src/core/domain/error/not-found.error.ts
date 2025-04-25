import { AbstractError } from '@base/core/domain/error/abstract.error';

export class NotFoundError extends AbstractError {
  public readonly source = NotFoundError.name;
  protected readonly _type = NotFoundError.name;
}
