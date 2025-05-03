import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { FollowerEqualsFollowingError } from '@core/domain/entity/follower/error/follower-equals-following.error';
import { Fail } from '@shared/feature/functional/function/fail.function';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { FollowerEntityPropsInterface } from '@core/domain/entity/follower/follower.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';
import type { EitherType } from '@shared/feature/functional/type/either.type';

export class FollowerEntity extends BaseEntity {
  public readonly follower: UserEntity;
  public readonly following: UserEntity;

  protected readonly _type = FollowerEntity.name;

  private constructor(props: FollowerEntityPropsInterface) {
    super(props);

    this.follower = props.follower;
    this.following = props.following;
  }

  public static create(
    props: FollowerEntityPropsInterface,
  ): EitherType<FollowerEqualsFollowingError, FollowerEntity> {
    if (
      !FollowerEntity.isFollowerDistinctFromFollowing(
        props.follower,
        props.following,
      )
    ) {
      return Fail(new FollowerEqualsFollowingError());
    }

    return Ok(new FollowerEntity(props));
  }

  public static isFollowerDistinctFromFollowing(
    follower: UserEntity,
    following: UserEntity,
  ): boolean {
    return !follower.id.equals(following.id);
  }
}
