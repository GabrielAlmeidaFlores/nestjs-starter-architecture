import { NotFoundError } from '@shared/feature/functional/error/not-found.error';

export class EntityNotFoundError extends NotFoundError {
  protected readonly _type = EntityNotFoundError.name;
}
