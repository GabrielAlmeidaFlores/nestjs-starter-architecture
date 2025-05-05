import { BaseEntity } from '@core/domain/entity/base/base.entity';

import type { CommentEntity } from '@core/domain/entity/comment/comment.entity';
import type { CommentLikeEntityPropsInterface } from '@core/domain/entity/comment-like/comment-like.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export class CommentLikeEntity extends BaseEntity {
  public readonly comment: CommentEntity;
  public readonly user: UserEntity;

  protected readonly _type = CommentLikeEntity.name;

  public constructor(props: CommentLikeEntityPropsInterface) {
    super(props);

    this.comment = props.comment;
    this.user = props.user;
  }
}
