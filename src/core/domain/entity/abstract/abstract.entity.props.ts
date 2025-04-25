import type { Guid } from '@base/core/domain/entity/abstract/value-object/guid.value-object';

export interface AbstractEntityPropsInterface {
  id?: Guid;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
