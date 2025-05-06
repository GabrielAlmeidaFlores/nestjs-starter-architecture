import { Module } from '@nestjs/common';

import { MapperModule } from '@base/lib/mapper/mapper.module';

@Module({
  imports: [MapperModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  protected readonly _type = AppModule.name;
}
