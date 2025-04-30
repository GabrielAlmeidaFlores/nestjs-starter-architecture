import { BaseEntity } from '@core/domain/entity/base/base.entity';
import { UserTooYoungError } from '@core/domain/entity/user/error/user-too-young.error';
import { Fail } from '@shared/feature/functional/function/fail.function';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { GenderEnum } from '@core/domain/entity/user/enum/gender.enum';
import type { UserEntityPropsInterface } from '@core/domain/entity/user/user.entity.props.interface';
import type { Email } from '@core/domain/entity/user/value-object/email/email.value-object';
import type { FederalDocument } from '@core/domain/entity/user/value-object/federal-document/federal-document.value-object';
import type { Either } from '@shared/feature/functional/type/either.type';

export class UserEntity extends BaseEntity {
  public name: string;
  public dateOfBirth: Date;
  public gender: GenderEnum;
  public email: Email;
  public password: string;
  public federalDocument: FederalDocument;

  protected readonly _type = UserEntity.name;

  private constructor(props: UserEntityPropsInterface) {
    super(props);

    this.name = props.name;
    this.dateOfBirth = props.dateOfBirth;
    this.gender = props.gender;
    this.email = props.email;
    this.password = props.password;
    this.federalDocument = props.federalDocument;
  }

  static create(
    props: UserEntityPropsInterface,
  ): Either<UserTooYoungError, UserEntity> {
    if (!this.isDateOfBirthValid(props.dateOfBirth)) {
      return Fail(new UserTooYoungError());
    }

    return Ok(new UserEntity(props));
  }

  static isDateOfBirthValid(dateOfBirth: Date): boolean {
    const today = new Date();

    const requiredMinimumAge = 18;

    const eighteenYearsAgo = new Date(
      today.getFullYear() - requiredMinimumAge,
      today.getMonth(),
      today.getDate(),
    );
    return dateOfBirth <= eighteenYearsAgo;
  }
}
