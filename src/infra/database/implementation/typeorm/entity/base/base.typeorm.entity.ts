import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import type { BaseTypeormEntityPropsInterface } from '@infra/database/implementation/typeorm/entity/base/base.typeorm.entity.props.interface';

export abstract class BaseTypeormEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt!: Date | null;

  public constructor(props: BaseTypeormEntityPropsInterface) {
    if (!this.isDefined(props)) {
      return;
    }

    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
  }

  protected isDefined<T>(value?: T): value is T {
    return value !== undefined;
  }
}
