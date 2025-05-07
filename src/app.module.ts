import { Module } from '@nestjs/common';

import { MapperModule } from '@base/lib/mapper/mapper.module';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [MapperModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  protected readonly _type = AppModule.name;
}
