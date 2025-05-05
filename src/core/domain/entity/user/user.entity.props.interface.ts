import type { BaseEntityPropsInterface } from '@core/domain/entity/base/base.entity.props.interface';
import type { UserGenderEnum } from '@core/domain/enum/user-gender.enum';
import type { Email } from '@core/domain/value-object/email/email.value-object';
import type { FederalDocument } from '@core/domain/value-object/federal-document/federal-document.value-object';

export interface UserEntityPropsInterface extends BaseEntityPropsInterface {
  name: string;
  dateOfBirth: Date;
  gender: UserGenderEnum;
  email: Email;
  password: string;
  federalDocument: FederalDocument;
}
