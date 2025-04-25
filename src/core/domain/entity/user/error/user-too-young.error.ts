import { InvalidInputError } from '@base/core/domain/error/invalid-input.error';

export class UserTooYoungError extends InvalidInputError {
  protected override readonly _type = UserTooYoungError.name;
}
