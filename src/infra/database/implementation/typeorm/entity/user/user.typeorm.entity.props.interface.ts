import type { GenderEnum } from '@core/domain/entity/user/enum/gender.enum';
import type { BaseTypeOrmEntityPropsInterface } from '@infra/database/implementation/typeorm/entity/base/base.typeorm.entity.props.interface';

export interface UserTypeOrmEntityPropsInterface
  extends BaseTypeOrmEntityPropsInterface {
  name: string;
  dateOfBirth: Date;
  gender: GenderEnum;
  email: string;
  password: string;
  federalDocument: string;
}
