import { InvalidInputError } from '@shared/feature/functional/error/invalid-input.error';

export class FollowerAndFollowingMustBeDistinctError extends InvalidInputError {
  protected readonly _type = FollowerAndFollowingMustBeDistinctError.name;
}
