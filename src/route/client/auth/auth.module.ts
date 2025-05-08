import { Module } from '@nestjs/common';

import { AuthController } from '@base/route/client/auth/auth.controller';

@Module({
  controllers: [AuthController],
})
export class AuthModule {
  protected readonly _type = AuthModule.name;
}
