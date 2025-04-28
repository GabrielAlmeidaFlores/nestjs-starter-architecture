import { InvalidInputError } from '@shared/feature/functional/error/invalid-input.error';

export class ForeignKeyViolationError extends InvalidInputError {
  protected readonly _type = ForeignKeyViolationError.name;
}
