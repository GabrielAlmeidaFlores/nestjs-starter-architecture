import { UnexpectedError } from '@shared/feature/functional/error/unexpected.error';

export class QueryExecutionError extends UnexpectedError {
  protected readonly _type = QueryExecutionError.name;
}
