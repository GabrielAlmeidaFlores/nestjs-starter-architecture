import { Guid } from '@core/domain/value-object/guid/guid.value-object';

import type { BaseEntityPropsInterface } from '@core/domain/entity/base/base.entity.props.interface';

export abstract class BaseEntity {
  public id: Guid;
  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt: Date | null;

  protected constructor(props: BaseEntityPropsInterface) {
    this.id = props.id ?? new Guid();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.deletedAt = props.deletedAt ?? null;
  }
}
