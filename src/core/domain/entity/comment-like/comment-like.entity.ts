import { AbstractEntity } from '@base/core/domain/entity/abstract/abstract.entity';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { CommentEntity } from '@base/core/domain/entity/comment/comment.entity';
import type { CommentLikeEntityPropsInterface } from '@base/core/domain/entity/comment-like/comment-like.entity.props';
import type { UserEntity } from '@base/core/domain/entity/user/user.entity';
import type { Either } from '@base/shared/feature/functional/either.type';

export class CommentLikeEntity extends AbstractEntity {
  public comment: CommentEntity;
  public user: UserEntity;

  protected readonly _type = CommentLikeEntity.name;

  private constructor(props: CommentLikeEntityPropsInterface) {
    super(props);

    this.comment = props.comment;
    this.user = props.user;
  }

  static create(
    props: CommentLikeEntityPropsInterface,
  ): Either<never, CommentLikeEntity> {
    return Ok(new CommentLikeEntity(props));
  }
}
