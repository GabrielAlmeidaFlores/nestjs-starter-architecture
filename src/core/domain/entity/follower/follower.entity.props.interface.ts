import type { BaseEntityPropsInterface } from '@core/domain/entity/base/base.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export interface FollowerEntityPropsInterface extends BaseEntityPropsInterface {
  follower: UserEntity;
  following: UserEntity;
}
