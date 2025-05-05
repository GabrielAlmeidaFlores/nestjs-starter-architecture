import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { UserTooYoungError } from '@core/domain/entity/user/error/user-too-young.error';

import type { UserEntityPropsInterface } from '@core/domain/entity/user/user.entity.props.interface';
import type { UserGenderEnum } from '@core/domain/enum/user-gender.enum';
import type { Email } from '@core/domain/value-object/email/email.value-object';
import type { FederalDocument } from '@core/domain/value-object/federal-document/federal-document.value-object';

export class UserEntity extends BaseEntity {
  public readonly name: string;
  public readonly dateOfBirth: Date;
  public readonly gender: UserGenderEnum;
  public readonly email: Email;
  public readonly password: string;
  public readonly federalDocument: FederalDocument;

  protected readonly _type = UserEntity.name;

  public constructor(props: UserEntityPropsInterface) {
    super(props);

    if (!this.isDateOfBirthValid(props.dateOfBirth)) {
      throw new UserTooYoungError();
    }

    this.name = props.name;
    this.dateOfBirth = props.dateOfBirth;
    this.gender = props.gender;
    this.email = props.email;
    this.password = props.password;
    this.federalDocument = props.federalDocument;
  }

  public isDateOfBirthValid(dateOfBirth: Date): boolean {
    const today = new Date();

    const requiredMinimumAge = 18;

    const minimumBirthDate = new Date(
      today.getFullYear() - requiredMinimumAge,
      today.getMonth(),
      today.getDate(),
    );
    return dateOfBirth <= minimumBirthDate;
  }
}
