import { BaseTypeOrmEntity } from '@infra/database/implementation/typeorm/entity/base/base.typeorm.entity';

import type { GenderEnum } from '@core/domain/entity/user/enum/gender.enum';
import type { UserTypeormEntityPropsInterface } from '@infra/database/implementation/typeorm/entity/user/user.typeorm.entity.props.interface';

export class UserTypeormEntity extends BaseTypeOrmEntity {
  public name: string;
  public dateOfBirth: Date;
  public gender: GenderEnum;
  public email: string;
  public password: string;
  public federalDocument: string;

  protected readonly _type = UserTypeormEntity.name;

  public constructor(props: UserTypeormEntityPropsInterface) {
    super(props);

    this.name = props.name;
    this.dateOfBirth = props.dateOfBirth;
    this.gender = props.gender;
    this.email = props.email;
    this.password = props.password;
    this.federalDocument = props.federalDocument;
  }
}
