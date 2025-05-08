import { UserGenderEnum } from '@core/domain/entity/user/enum/user-gender.enum';
import { DtoDateProperty } from '@shared/api/decorator/specification/dto-property/decorator/dto-date-property.decorator';
import { DtoEnumProperty } from '@shared/api/decorator/specification/dto-property/decorator/dto-enum-property.decorator';
import { DtoStringProperty } from '@shared/api/decorator/specification/dto-property/decorator/dto-string-property.decorator';

export class SignupRequestDto {
  @DtoStringProperty()
  public name: string;

  @DtoDateProperty()
  public dateOfBirth: Date;

  @DtoEnumProperty(UserGenderEnum)
  public gender: UserGenderEnum;

  @DtoStringProperty()
  public email: string;

  @DtoStringProperty()
  public password: string;

  @DtoStringProperty()
  public federalDocument: string;

  protected readonly _type = SignupRequestDto.name;

  public constructor(props: SignupRequestDto) {
    this.name = props.name;
    this.dateOfBirth = props.dateOfBirth;
    this.gender = props.gender;
    this.email = props.email;
    this.password = props.password;
    this.federalDocument = props.federalDocument;
  }
}
