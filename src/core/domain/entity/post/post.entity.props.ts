import type { BaseEntityPropsInterface } from '@base/core/domain/entity/base/base.entity.props';
import type { UserEntity } from '@base/core/domain/entity/user/user.entity';

export interface PostEntityPropsInterface extends BaseEntityPropsInterface {
  image: string;
  description: string;
  user: UserEntity;
}
