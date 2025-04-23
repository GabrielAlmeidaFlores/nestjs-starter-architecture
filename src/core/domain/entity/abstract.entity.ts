import type { Guid } from '@base/core/domain/entity/value-object/guid.value-object';

export abstract class AbstractEntity {
  constructor(
    public id: Guid,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | null,
  ) {}
}
