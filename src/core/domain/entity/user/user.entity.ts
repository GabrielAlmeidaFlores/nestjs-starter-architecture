import { AbstractEntity } from '@base/core/domain/entity/abstract/abstract.entity';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { GenderEnum } from '@base/core/domain/entity/user/enum/gender.enum';
import type { UserEntityPropsInterface } from '@base/core/domain/entity/user/user.entity.props.interface';
import type { Email } from '@base/core/domain/entity/user/value-object/email.value-object';
import type { FederalDocument } from '@base/core/domain/entity/user/value-object/federal-document.value-object';
import type { InvalidInputError } from '@base/core/domain/error/invalid-input.error';
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
  ): Either<InvalidInputError, UserEntity> {
    return Ok(new UserEntity(props));
  }
}
