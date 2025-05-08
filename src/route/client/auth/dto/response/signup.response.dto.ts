import { UserGenderEnum } from '@core/domain/entity/user/enum/user-gender.enum';
import { DtoDateProperty } from '@shared/api/decorator/specification/dto-property/decorator/dto-date-property.decorator';
import { DtoEnumProperty } from '@shared/api/decorator/specification/dto-property/decorator/dto-enum-property.decorator';
import { DtoStringProperty } from '@shared/api/decorator/specification/dto-property/decorator/dto-string-property.decorator';

export class SignupResponseDto {
  @DtoStringProperty()
  public name: string;

  @DtoDateProperty()
  public dateOfBirth: Date;

  @DtoEnumProperty(UserGenderEnum)
  public gender: UserGenderEnum;

  @DtoStringProperty()
  public email: string;

  @DtoStringProperty()
  public federalDocument: string;

  protected readonly _type = SignupResponseDto.name;

  public constructor(props: SignupResponseDto) {
    this.name = props.name;
    this.dateOfBirth = props.dateOfBirth;
    this.gender = props.gender;
    this.email = props.email;
    this.federalDocument = props.federalDocument;
  }
}
