import { BaseEntity } from '@core/domain/entity/base/base.entity';

import type { PostEntity } from '@core/domain/entity/post/post.entity';
import type { PostLikeEntityPropsInterface } from '@core/domain/entity/post-like/post-like.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export class PostLikeEntity extends BaseEntity {
  public readonly post: PostEntity;
  public readonly user: UserEntity;

  protected readonly _type = PostLikeEntity.name;

  public constructor(props: PostLikeEntityPropsInterface) {
    super(props);

    this.post = props.post;
    this.user = props.user;
  }
}
