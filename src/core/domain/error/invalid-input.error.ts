import { AbstractError } from '@base/core/domain/error/abstract.error';

export class InvalidInputError extends AbstractError {
  protected readonly _type = InvalidInputError.name;
}
