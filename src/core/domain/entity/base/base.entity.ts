import { Guid } from '@core/domain/entity/base/value-object/guid.value-object';

import type { BaseEntityPropsInterface } from '@core/domain/entity/base/base.entity.props.interface';

export abstract class BaseEntity {
  public id: Guid;
  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt: Date | null;

  public constructor(props: BaseEntityPropsInterface) {
    this.id = props.id ?? Guid.generate();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.deletedAt = props.deletedAt ?? null;
  }
}
