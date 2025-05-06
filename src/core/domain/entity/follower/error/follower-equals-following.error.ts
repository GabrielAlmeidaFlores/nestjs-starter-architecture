import { InvalidInputError } from '@core/domain/error/invalid-input.error';

export class FollowerEqualsFollowingError extends InvalidInputError {
  protected readonly _type = FollowerEqualsFollowingError.name;
}
