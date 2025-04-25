import { Guid } from '@base/core/domain/entity/abstract/value-object/guid.value-object';

import type { AbstractEntityPropsInterface } from '@base/core/domain/entity/abstract/abstract.entity.props';

export abstract class AbstractEntity {
  public id: Guid;
  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt: Date | null;

  constructor(props: AbstractEntityPropsInterface) {
    this.id = props.id ?? Guid.generate();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.deletedAt = props.deletedAt ?? null;
  }
}
