import type { BaseEntityPropsInterface } from '@core/domain/entity/base/base.entity.props';
import type { PostEntity } from '@core/domain/entity/post/post.entity';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export interface PostLikeEntityPropsInterface extends BaseEntityPropsInterface {
  post: PostEntity;
  user: UserEntity;
}
