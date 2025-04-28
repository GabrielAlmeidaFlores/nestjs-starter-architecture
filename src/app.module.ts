import { Module } from '@nestjs/common';

import { ApplicationVariableModule } from '@infra/application-variable/application-variable.module';

@Module({
  imports: [ApplicationVariableModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  protected readonly _type = AppModule.name;
}
