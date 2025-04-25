import { AbstractEntity } from '@base/core/domain/entity/abstract/abstract.entity';
import { UserTooYoungError } from '@base/core/domain/entity/user/error/user-too-young.error';
import { Fail } from '@base/shared/feature/functional/fail.function';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { GenderEnum } from '@base/core/domain/entity/user/enum/gender.enum';
import type { UserEntityPropsInterface } from '@base/core/domain/entity/user/user.entity.props.interface';
import type { Email } from '@base/core/domain/entity/user/value-object/email/email.value-object';
import type { FederalDocument } from '@base/core/domain/entity/user/value-object/federal-document/federal-document.value-object';
import type { Either } from '@base/shared/feature/functional/either.type';

export class UserEntity extends AbstractEntity {
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
