import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { CommentEntity } from '@core/domain/entity/comment/comment.entity';
import type { CommentLikeEntityPropsInterface } from '@core/domain/entity/comment-like/comment-like.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';
import type { EitherType } from '@shared/feature/functional/type/either.type';

export class CommentLikeEntity extends BaseEntity {
  public comment: CommentEntity;
  public user: UserEntity;

  protected readonly _type = CommentLikeEntity.name;

  private constructor(props: CommentLikeEntityPropsInterface) {
    super(props);

    this.comment = props.comment;
    this.user = props.user;
  }

  public static create(
    props: CommentLikeEntityPropsInterface,
  ): EitherType<never, CommentLikeEntity> {
    return Ok(new CommentLikeEntity(props));
  }
}
