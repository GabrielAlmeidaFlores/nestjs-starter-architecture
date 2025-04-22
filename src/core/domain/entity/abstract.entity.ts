import type { Guid } from '@base/core/domain/entity/value-object/guid.value-object';

export abstract class AbstractEntity {
  constructor(
    public readonly id: Guid,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date | null,
  ) {}
}
