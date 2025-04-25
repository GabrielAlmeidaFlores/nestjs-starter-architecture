import type { AbstractEntityPropsInterface } from '@base/core/domain/entity/abstract/abstract.entity.props';
import type { UserEntity } from '@base/core/domain/entity/user/user.entity';

export interface PostEntityPropsInterface extends AbstractEntityPropsInterface {
  image: string;
  description: string;
  user: UserEntity;
}
