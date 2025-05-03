import type { BaseEntityPropsInterface } from '@core/domain/entity/base/base.entity.props.interface';
import type { CommentEntity } from '@core/domain/entity/comment/comment.entity';
import type { PostEntity } from '@core/domain/entity/post/post.entity';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export interface CommentEntityPropsInterface extends BaseEntityPropsInterface {
  value: string;
  post: PostEntity;
  user: UserEntity;
  comment?: CommentEntity;
}
