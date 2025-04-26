import { BaseEntity } from '@base/core/domain/entity/base/base.entity';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { CommentEntityPropsInterface } from '@base/core/domain/entity/comment/comment.entity.props';
import type { PostEntity } from '@base/core/domain/entity/post/post.entity';
import type { Either } from '@base/shared/feature/functional/either.type';

export class CommentEntity extends BaseEntity {
  public value: string;
  public post: PostEntity;
  public comment: CommentEntity | null;

  protected readonly _type = CommentEntity.name;

  private constructor(props: CommentEntityPropsInterface) {
    super(props);

    this.value = props.value;
    this.post = props.post;
    this.comment = props.comment ?? null;
  }

  static create(
    props: CommentEntityPropsInterface,
  ): Either<never, CommentEntity> {
    return Ok(new CommentEntity(props));
  }
}
