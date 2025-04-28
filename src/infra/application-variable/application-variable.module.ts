import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApplicationVariableInterface } from '@infra/application-variable/application-variable.interface';
import { EnvironmentVariableService } from '@infra/application-variable/implementation/environment-variable/environment-variable.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: ApplicationVariableInterface,
      useClass: EnvironmentVariableService,
    },
    EnvironmentVariableService,
  ],
  exports: [ApplicationVariableInterface],
})
export class ApplicationVariableModule {
  protected readonly _type = ApplicationVariableModule.name;
}
