import { AbstractEntity } from '@base/core/domain/entity/abstract.entity';

export class UserEntity extends AbstractEntity {
  protected readonly _type = UserEntity.name;
}
