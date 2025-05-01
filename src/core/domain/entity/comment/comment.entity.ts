import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { CommentEntityPropsInterface } from '@core/domain/entity/comment/comment.entity.props.interface';
import type { PostEntity } from '@core/domain/entity/post/post.entity';
import type { EitherType } from '@shared/feature/functional/type/either.type';

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

  public static create(
    props: CommentEntityPropsInterface,
  ): EitherType<never, CommentEntity> {
    return Ok(new CommentEntity(props));
  }
}
