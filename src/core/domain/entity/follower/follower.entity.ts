import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { FollowerEqualsFollowingError } from '@core/domain/entity/follower/error/follower-equals-following.error';

import type { FollowerEntityPropsInterface } from '@core/domain/entity/follower/follower.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export class FollowerEntity extends BaseEntity {
  public readonly follower: UserEntity;
  public readonly following: UserEntity;

  protected readonly _type = FollowerEntity.name;

  private constructor(props: FollowerEntityPropsInterface) {
    super(props);

    if (
      !this.isFollowerDistinctFromFollowing(props.follower, props.following)
    ) {
      throw new FollowerEqualsFollowingError();
    }

    this.follower = props.follower;
    this.following = props.following;
  }

  public isFollowerDistinctFromFollowing(
    follower: UserEntity,
    following: UserEntity,
  ): boolean {
    return !follower.id.equals(following.id);
  }
}
