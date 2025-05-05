import { BaseEntity } from '@core/domain/entity/base/base.entity';

import type { FollowerEntityPropsInterface } from '@core/domain/entity/follower/follower.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export class FollowerEntity extends BaseEntity {
  public readonly follower: UserEntity;
  public readonly following: UserEntity;

  protected readonly _type = FollowerEntity.name;

  public constructor(props: FollowerEntityPropsInterface) {
    super(props);

    this.follower = props.follower;
    this.following = props.following;
  }
}
