import type { AbstractEntityPropsInterface } from '@base/core/domain/entity/abstract/abstract.entity.props';
import type { CommentEntity } from '@base/core/domain/entity/comment/comment.entity';
import type { UserEntity } from '@base/core/domain/entity/user/user.entity';

export interface CommentLikeEntityPropsInterface
  extends AbstractEntityPropsInterface {
  comment: CommentEntity;
  user: UserEntity;
}
