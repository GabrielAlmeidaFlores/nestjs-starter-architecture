import { AbstractError } from '@base/core/domain/error/abstract.error';

export class UnexpectedError extends AbstractError {
  protected readonly _type = UnexpectedError.name;
}
