import { Module } from '@nestjs/common';

import { ApplicationVariableModule } from './infra/application-variable/application-variable.module';
import { EnvironmentVariableService } from './src/infra/application-variable/implementation/environment-variable/environment-variable.service';

@Module({
  imports: [ApplicationVariableModule],
  controllers: [],
  providers: [EnvironmentVariableService],
})
export class AppModule {
  protected readonly _type = AppModule.name;
}
