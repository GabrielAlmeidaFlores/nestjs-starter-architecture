import type { AbstractEntityPropsInterface } from '@base/core/domain/entity/abstract/abstract.entity.props';
import type { GenderEnum } from '@base/core/domain/entity/user/enum/gender.enum';
import type { Email } from '@base/core/domain/entity/user/value-object/email.value-object';
import type { FederalDocument } from '@base/core/domain/entity/user/value-object/federal-document.value-object';

export interface UserEntityPropsInterface extends AbstractEntityPropsInterface {
  name: string;
  dateOfBirth: Date;
  gender: GenderEnum;
  email: Email;
  password: string;
  federalDocument: FederalDocument;
}
