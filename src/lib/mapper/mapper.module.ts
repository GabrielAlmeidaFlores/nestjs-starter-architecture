import { Module } from '@nestjs/common';

import { AutoMapperModule } from '@base/lib/mapper/implementation/auto-mapper/auto-mapper.module';
import { AutoMapperService } from '@base/lib/mapper/implementation/auto-mapper/auto-mapper.service';
import { MapperGateway } from '@base/lib/mapper/mapper.gateway';

@Module({
  imports: [AutoMapperModule],
  providers: [
    {
      provide: MapperGateway,
      useClass: AutoMapperService,
    },
    AutoMapperService,
  ],
  exports: [MapperGateway],
})
export class MapperModule {
  protected readonly _type = MapperModule.name;
}
