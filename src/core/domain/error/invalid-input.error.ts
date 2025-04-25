import { AbstractError } from '@base/core/domain/error/abstract.error';

export class InvalidInputError extends AbstractError {
  public readonly source = InvalidInputError.name;
  protected readonly _type = InvalidInputError.name;
}
