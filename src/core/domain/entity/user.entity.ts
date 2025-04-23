import { AbstractEntity } from '@base/core/domain/entity/abstract.entity';

import type { UserGenderEnum } from '@base/core/domain/entity/enum/user-gender.enum';
import type { Guid } from '@base/core/domain/entity/value-object/guid.value-object';

export class UserEntity extends AbstractEntity {
  protected readonly _type = UserEntity.name;

  constructor(
    id: Guid,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
    public name: string,
    public age: number,
    public gender: UserGenderEnum,
    public email: string,
    public password: string,
    public post: Guid[],
  ) {
    super(id, createdAt, updatedAt, deletedAt);
  }
}
