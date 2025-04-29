import { Module } from '@nestjs/common';

import { MapperModule } from '@base/lib/mapper/mapper.module';
import { ApplicationVariableModule } from '@infra/application-variable/application-variable.module';

@Module({
  imports: [ApplicationVariableModule, MapperModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  protected readonly _type = AppModule.name;
}
