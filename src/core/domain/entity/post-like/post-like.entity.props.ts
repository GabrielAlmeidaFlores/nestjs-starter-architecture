import type { BaseEntityPropsInterface } from '@base/core/domain/entity/base/base.entity.props';
import type { PostEntity } from '@base/core/domain/entity/post/post.entity';
import type { UserEntity } from '@base/core/domain/entity/user/user.entity';

export interface PostLikeEntityPropsInterface
  extends BaseEntityPropsInterface {
  post: PostEntity;
  user: UserEntity;
}
