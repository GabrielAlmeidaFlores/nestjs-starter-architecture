import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { PostEntity } from '@core/domain/entity/post/post.entity';
import type { PostLikeEntityPropsInterface } from '@core/domain/entity/post-like/post-like.entity.props';
import type { UserEntity } from '@core/domain/entity/user/user.entity';
import type { EitherType } from '@shared/feature/functional/type/either.type';

export class PostLikeEntity extends BaseEntity {
  public post: PostEntity;
  public user: UserEntity;

  protected readonly _type = PostLikeEntity.name;

  private constructor(props: PostLikeEntityPropsInterface) {
    super(props);

    this.post = props.post;
    this.user = props.user;
  }

  public static create(
    props: PostLikeEntityPropsInterface,
  ): EitherType<never, PostLikeEntity> {
    return Ok(new PostLikeEntity(props));
  }
}
