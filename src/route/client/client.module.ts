import { Module } from '@nestjs/common';

import { AuthModule } from '@base/route/client/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
})
export class ClientModule {
  protected readonly _type = ClientModule.name;
}
