import { UnexpectedError } from '@shared/feature/functional/error/unexpected.error';

export class QueryFailedError extends UnexpectedError {
  protected readonly _type = QueryFailedError.name;
}
