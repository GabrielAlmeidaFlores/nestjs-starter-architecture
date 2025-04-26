import type { BaseEntityPropsInterface } from '@base/core/domain/entity/base/base.entity.props';
import type { CommentEntity } from '@base/core/domain/entity/comment/comment.entity';
import type { UserEntity } from '@base/core/domain/entity/user/user.entity';

export interface CommentLikeEntityPropsInterface
  extends BaseEntityPropsInterface {
  comment: CommentEntity;
  user: UserEntity;
}
