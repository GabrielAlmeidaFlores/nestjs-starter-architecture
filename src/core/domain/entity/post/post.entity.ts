import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { Ok } from '@shared/feature/functional/ok.function';

import type { PostEntityPropsInterface } from '@core/domain/entity/post/post.entity.props';
import type { UserEntity } from '@core/domain/entity/user/user.entity';
import type { Either } from '@shared/feature/functional/either.type';

export class PostEntity extends BaseEntity {
  public image: string;
  public description: string;
  public user: UserEntity;

  protected readonly _type = PostEntity.name;

  private constructor(props: PostEntityPropsInterface) {
    super(props);

    this.image = props.image;
    this.description = props.description;
    this.user = props.user;
  }

  static create(props: PostEntityPropsInterface): Either<never, PostEntity> {
    return Ok(new PostEntity(props));
  }
}
