import { BaseEntity } from '@core/domain/entity/base/base.entity';

import type { PostEntityPropsInterface } from '@core/domain/entity/post/post.entity.props.interface';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export class PostEntity extends BaseEntity {
  public readonly image: string;
  public readonly description: string;
  public readonly user: UserEntity;

  protected readonly _type = PostEntity.name;

  public constructor(props: PostEntityPropsInterface) {
    super(props);

    this.image = props.image;
    this.description = props.description;
    this.user = props.user;
  }
}
