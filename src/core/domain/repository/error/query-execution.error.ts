import { UnexpectedError } from '@shared/feature/application/error/unexpected.error';

export class QueryExecutionError extends UnexpectedError {
  protected readonly _type = QueryExecutionError.name;
}
