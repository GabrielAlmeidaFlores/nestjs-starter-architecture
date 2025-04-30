import { Column, Entity } from 'typeorm';

import { GenderEnum } from '@core/domain/entity/user/enum/gender.enum';
import { BaseTypeOrmEntity } from '@infra/database/implementation/typeorm/entity/base/base.typeorm.entity';

import type { UserTypeOrmEntityPropsInterface } from '@infra/database/implementation/typeorm/entity/user/user.typeorm.entity.props.interface';

@Entity({ name: 'user' })
export class UserTypeOrmEntity extends BaseTypeOrmEntity {
  @Column({ name: 'name', type: 'varchar', length: 100 })
  public name: string;

  @Column({ name: 'date_of_birth', type: 'date' })
  public dateOfBirth: Date;

  @Column({ name: 'gender', type: 'simple-enum', enum: GenderEnum })
  public gender: GenderEnum;

  @Column({ name: 'email', type: 'varchar', length: 50, unique: true })
  public email: string;

  @Column({
    name: 'password',
    type: 'char',
    length: 60,
  })
  public password: string;

  @Column({
    name: 'federal_document',
    type: 'varchar',
    length: 255,
    unique: true,
  })
  public federalDocument: string;

  protected readonly _type = UserTypeOrmEntity.name;

  private constructor(props: UserTypeOrmEntityPropsInterface) {
    super(props);

    this.name = props.name;
    this.dateOfBirth = props.dateOfBirth;
    this.gender = props.gender;
    this.email = props.email;
    this.password = props.password;
    this.federalDocument = props.federalDocument;
  }
}
