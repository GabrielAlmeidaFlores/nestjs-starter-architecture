import { Module } from '@nestjs/common';

import { AutoMapperModule } from '@base/lib/mapper/implementation/auto-mapper/auto-mapper.module';
import { AutoMapperService } from '@base/lib/mapper/implementation/auto-mapper/auto-mapper.service';
import { MapperInterface } from '@base/lib/mapper/mapper.interface';

@Module({
  imports: [AutoMapperModule],
  providers: [
    {
      provide: MapperInterface,
      useClass: AutoMapperService,
    },
    AutoMapperService,
  ],
  exports: [MapperInterface],
})
export class MapperModule {
  protected readonly _type = MapperModule.name;
}
