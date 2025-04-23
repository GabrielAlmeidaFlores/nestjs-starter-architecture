import { AbstractEntity } from '@base/core/domain/entity/abstract.entity';

import type { Guid } from '@base/core/domain/entity/value-object/guid.value-object';

export class CommentEntity extends AbstractEntity {
  protected readonly _type = CommentEntity.name;

  constructor(
    id: Guid,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
    public value: string,
    public comment: CommentEntity,
    public post: Guid,
    public user: Guid,
    public like: Guid[],
  ) {
    super(id, createdAt, updatedAt, deletedAt);
  }
}
