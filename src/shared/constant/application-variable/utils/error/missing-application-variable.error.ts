import { UnexpectedError } from '@core/domain/error/unexpected.error';

export class MissingApplicationVariableError extends UnexpectedError {
  protected readonly _type = MissingApplicationVariableError.name;
}
