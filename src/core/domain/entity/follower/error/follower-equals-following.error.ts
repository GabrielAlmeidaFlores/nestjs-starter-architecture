import { InvalidInputError } from '@shared/feature/functional/error/invalid-input.error';

export class FollowerEqualsFollowingError extends InvalidInputError {
  protected readonly _type = FollowerEqualsFollowingError.name;
}
