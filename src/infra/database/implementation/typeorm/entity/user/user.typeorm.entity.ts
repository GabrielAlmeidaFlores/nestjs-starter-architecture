import { Column, Entity } from 'typeorm';

import { UserGenderEnum } from '@core/domain/entity/user/enum/user-gender.enum';
import { BaseTypeormEntity } from '@infra/database/implementation/typeorm/entity/base/base.typeorm.entity';

import type { UserTypeormEntityPropsInterface } from '@infra/database/implementation/typeorm/entity/user/user.typeorm.entity.props.interface';

@Entity({ name: 'user' })
export class UserTypeormEntity extends BaseTypeormEntity {
  @Column({ name: 'name', type: 'varchar', length: 100 })
  public name!: string;

  @Column({ name: 'date_of_birth', type: 'date' })
  public dateOfBirth!: Date;

  @Column({ name: 'gender', type: 'simple-enum', enum: UserGenderEnum })
  public gender!: UserGenderEnum;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  public email!: string;

  @Column({ name: 'password', type: 'char', length: 60 })
  public password!: string;

  @Column({ name: 'federal_document', type: 'char', length: 11 })
  public federalDocument!: string;

  protected readonly _type = UserTypeormEntity.name;

  public constructor(props: UserTypeormEntityPropsInterface) {
    super(props);

    if (!this.isDefined(props)) {
      return;
    }

    this.name = props.name;
    this.dateOfBirth = props.dateOfBirth;
    this.gender = props.gender;
    this.email = props.email;
    this.password = props.password;
    this.federalDocument = props.federalDocument;
  }
}
