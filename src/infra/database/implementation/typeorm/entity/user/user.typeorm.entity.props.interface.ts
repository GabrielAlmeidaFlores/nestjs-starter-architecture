import type { UserGenderEnum } from '@core/domain/enum/user-gender.enum';
import type { BaseTypeormEntityPropsInterface } from '@infra/database/implementation/typeorm/entity/base/base.typeorm.entity.props.interface';

export interface UserTypeormEntityPropsInterface
  extends BaseTypeormEntityPropsInterface {
  name: string;
  dateOfBirth: Date;
  gender: UserGenderEnum;
  email: string;
  password: string;
  federalDocument: string;
}
