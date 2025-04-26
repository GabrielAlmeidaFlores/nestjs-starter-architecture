import { InvalidInputError } from '@shared/feature/functional/error/invalid-input.error';

export class UserTooYoungError extends InvalidInputError {
  protected readonly _type = UserTooYoungError.name;
}
