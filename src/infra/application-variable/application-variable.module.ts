import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApplicationVariableInterface } from '@infra/application-variable/application-variable.interface';
import { ApplicationVariableService } from '@infra/application-variable/application-variable.service';
import { EnvironmentVariableService } from '@infra/application-variable/implementation/environment-variable/environment-variable.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: ApplicationVariableInterface,
      useClass: EnvironmentVariableService,
    },
    EnvironmentVariableService,
    ApplicationVariableService,
  ],
  exports: [ApplicationVariableService],
})
export class ApplicationVariableModule {
  protected readonly _type = ApplicationVariableModule.name;
}
