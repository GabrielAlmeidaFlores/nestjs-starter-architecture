import type { BaseEntityPropsInterface } from '@base/core/domain/entity/base/base.entity.props';
import type { GenderEnum } from '@base/core/domain/entity/user/enum/gender.enum';
import type { Email } from '@base/core/domain/entity/user/value-object/email/email.value-object';
import type { FederalDocument } from '@base/core/domain/entity/user/value-object/federal-document/federal-document.value-object';

export interface UserEntityPropsInterface extends BaseEntityPropsInterface {
  name: string;
  dateOfBirth: Date;
  gender: GenderEnum;
  email: Email;
  password: string;
  federalDocument: FederalDocument;
}
