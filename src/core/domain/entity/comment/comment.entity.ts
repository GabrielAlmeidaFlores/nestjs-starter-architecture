import { BaseEntity } from '@core/domain/entity/base/base.entity';

import type { CommentEntityPropsInterface } from '@core/domain/entity/comment/comment.entity.props.interface';
import type { PostEntity } from '@core/domain/entity/post/post.entity';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export class CommentEntity extends BaseEntity {
  public readonly value: string;
  public readonly post: PostEntity;
  public readonly user: UserEntity;
  public readonly comment: CommentEntity | null;

  protected readonly _type = CommentEntity.name;

  public constructor(props: CommentEntityPropsInterface) {
    super(props);

    this.value = props.value;
    this.post = props.post;
    this.user = props.user;
    this.comment = props.comment ?? null;
  }
}
