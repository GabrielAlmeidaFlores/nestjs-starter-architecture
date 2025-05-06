import { InvalidInputError } from '@core/domain/error/invalid-input.error';

export class UserTooYoungError extends InvalidInputError {
  protected readonly _type = UserTooYoungError.name;
}
