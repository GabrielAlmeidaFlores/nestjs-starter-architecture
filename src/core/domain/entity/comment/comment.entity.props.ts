import type { BaseEntityPropsInterface } from '@base/core/domain/entity/base/base.entity.props';
import type { CommentEntity } from '@base/core/domain/entity/comment/comment.entity';
import type { PostEntity } from '@base/core/domain/entity/post/post.entity';

export interface CommentEntityPropsInterface
  extends BaseEntityPropsInterface {
  value: string;
  post: PostEntity;
  comment?: CommentEntity;
}
