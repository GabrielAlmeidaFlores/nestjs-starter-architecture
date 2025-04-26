import type { BaseEntityPropsInterface } from '@core/domain/entity/base/base.entity.props';
import type { CommentEntity } from '@core/domain/entity/comment/comment.entity';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export interface CommentLikeEntityPropsInterface
  extends BaseEntityPropsInterface {
  comment: CommentEntity;
  user: UserEntity;
}
