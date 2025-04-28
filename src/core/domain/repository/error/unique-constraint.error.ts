import { InvalidInputError } from '@shared/feature/functional/error/invalid-input.error';

export class UniqueConstraintError extends InvalidInputError {
  protected readonly _type = UniqueConstraintError.name;
}
