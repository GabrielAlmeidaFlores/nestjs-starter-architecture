import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { PostEntityPropsInterface } from '@core/domain/entity/post/post.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';
import type { EitherType } from '@shared/feature/functional/type/either.type';

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

  public static create(
    props: PostEntityPropsInterface,
  ): EitherType<never, PostEntity> {
    return Ok(new PostEntity(props));
  }
}
