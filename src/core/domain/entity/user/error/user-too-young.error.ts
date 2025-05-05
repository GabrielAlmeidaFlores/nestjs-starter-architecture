import { InvalidInputError } from '@shared/feature/application/error/invalid-input.error';

export class UserTooYoungError extends InvalidInputError {
  protected readonly _type = UserTooYoungError.name;
}
