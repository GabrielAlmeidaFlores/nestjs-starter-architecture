import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { Ok } from '@shared/feature/functional/ok.function';

import type { FollowerEntityPropsInterface } from '@core/domain/entity/follower/follower.entity.props';
import type { UserEntity } from '@core/domain/entity/user/user.entity';
import type { Either } from '@shared/feature/functional/either.type';

export class FollowerEntity extends BaseEntity {
  public follower: UserEntity;
  public following: UserEntity;

  protected readonly _type = FollowerEntity.name;

  private constructor(props: FollowerEntityPropsInterface) {
    super(props);

    this.follower = props.follower;
    this.following = props.following;
  }

  static create(
    props: FollowerEntityPropsInterface,
  ): Either<never, FollowerEntity> {
    return Ok(new FollowerEntity(props));
  }
}
