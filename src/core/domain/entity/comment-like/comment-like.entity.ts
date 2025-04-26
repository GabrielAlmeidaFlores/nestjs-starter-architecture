import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { Ok } from '@shared/feature/functional/ok.function';

import type { CommentEntity } from '@core/domain/entity/comment/comment.entity';
import type { CommentLikeEntityPropsInterface } from '@core/domain/entity/comment-like/comment-like.entity.props';
import type { UserEntity } from '@core/domain/entity/user/user.entity';
import type { Either } from '@shared/feature/functional/either.type';

export class CommentLikeEntity extends BaseEntity {
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
