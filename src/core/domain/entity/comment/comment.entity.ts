import { AbstractEntity } from '@base/core/domain/entity/abstract/abstract.entity';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { CommentEntityPropsInterface } from '@base/core/domain/entity/comment/comment.entity.props';
import type { PostEntity } from '@base/core/domain/entity/post/post.entity';
import type { InvalidInputError } from '@base/core/domain/error/invalid-input.error';
import type { Either } from '@base/shared/feature/functional/either.type';

export class CommentEntity extends AbstractEntity {
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
  ): Either<InvalidInputError, CommentEntity> {
    return Ok(new CommentEntity(props));
  }
}
