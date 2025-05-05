import { NotFoundError } from '@shared/feature/application/error/not-found.error';

export class EntityNotFoundError extends NotFoundError {
  protected readonly _type = EntityNotFoundError.name;
}
