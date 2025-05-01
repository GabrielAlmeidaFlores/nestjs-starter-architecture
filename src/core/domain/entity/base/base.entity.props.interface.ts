import type { Guid } from '@core/domain/entity/base/value-object/guid/guid.value-object';

export interface BaseEntityPropsInterface {
  id?: Guid;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
