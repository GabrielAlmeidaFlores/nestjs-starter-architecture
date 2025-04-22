import { AbstractError } from '@base/core/domain/error/abstract.error';

export class NotFoundError extends AbstractError {
  protected readonly _type = NotFoundError.name;
}
