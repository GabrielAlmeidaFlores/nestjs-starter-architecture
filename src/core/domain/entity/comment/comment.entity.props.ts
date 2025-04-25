import type { AbstractEntityPropsInterface } from '@base/core/domain/entity/abstract/abstract.entity.props';
import type { CommentEntity } from '@base/core/domain/entity/comment/comment.entity';
import type { PostEntity } from '@base/core/domain/entity/post/post.entity';

export interface CommentEntityPropsInterface
  extends AbstractEntityPropsInterface {
  value: string;
  post?: PostEntity;
  comment?: CommentEntity;
}
