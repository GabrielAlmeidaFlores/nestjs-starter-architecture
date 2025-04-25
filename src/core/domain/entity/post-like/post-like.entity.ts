import { AbstractEntity } from '@base/core/domain/entity/abstract/abstract.entity';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { PostEntity } from '@base/core/domain/entity/post/post.entity';
import type { PostLikeEntityPropsInterface } from '@base/core/domain/entity/post-like/post-like.entity.props';
import type { UserEntity } from '@base/core/domain/entity/user/user.entity';
import type { Either } from '@base/shared/feature/functional/either.type';

export class PostLikeEntity extends AbstractEntity {
  public post: PostEntity;
  public user: UserEntity;

  protected readonly _type = PostLikeEntity.name;

  private constructor(props: PostLikeEntityPropsInterface) {
    super(props);

    this.post = props.post;
    this.user = props.user;
  }

  static create(
    props: PostLikeEntityPropsInterface,
  ): Either<never, PostLikeEntity> {
    return Ok(new PostLikeEntity(props));
  }
}
