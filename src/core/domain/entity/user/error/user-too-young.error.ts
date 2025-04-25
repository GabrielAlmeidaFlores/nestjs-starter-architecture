import { InvalidInputError } from '@base/shared/error/invalid-input.error';

export class UserTooYoungError extends InvalidInputError {
  protected readonly _type = UserTooYoungError.name;
}
