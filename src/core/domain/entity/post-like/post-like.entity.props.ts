import type { AbstractEntityPropsInterface } from '@base/core/domain/entity/abstract/abstract.entity.props';
import type { PostEntity } from '@base/core/domain/entity/post/post.entity';
import type { UserEntity } from '@base/core/domain/entity/user/user.entity';

export interface PostLikeEntityPropsInterface
  extends AbstractEntityPropsInterface {
  post: PostEntity;
  user: UserEntity;
}
