import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SignupRequestDto } from '@base/route/client/auth/dto/request/signup.request.dto';
import { SignupResponseDto } from '@base/route/client/auth/dto/response/signup.response.dto';
import { BuildEndpointDocumentation } from '@shared/api/decorator/specification/build-endpoint-documentation/build-endpoint-documentation.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  protected readonly _type = AuthController.name;

  @Post('signup')
  @BuildEndpointDocumentation({
    summary: 'Cadastro de novo usuário no sistema',
    secure: false,
    successResponse: {
      statusCode: 201,
      description: 'Novo usuário cadastrado com sucesso',
      type: SignupResponseDto,
    },
  })
  public async signup(
    @Body() dto: SignupRequestDto,
  ): Promise<SignupResponseDto> {
    await Promise.all([
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(dto);
        }, 1000);
      }),
    ]);

    throw new Error();
  }
}
