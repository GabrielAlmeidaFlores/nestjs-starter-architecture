import { ApiProperty } from '@nestjs/swagger';

import { ErrorResponseDtoPropsInterface } from '@shared/api/dto/response/error/error.response.dto.props.interface';

export class ErrorResponseDto {
  @ApiProperty()
  public message: string;

  @ApiProperty()
  public error: string;

  @ApiProperty()
  public statusCode: number;

  protected readonly _type = ErrorResponseDto.name;

  public constructor(props: ErrorResponseDtoPropsInterface) {
    this.message = props.message;
    this.error = props.error;
    this.statusCode = props.statusCode;
  }
}
