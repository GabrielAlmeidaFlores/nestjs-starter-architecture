import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';

import { AutoMapperService } from '@base/lib/mapper/implementation/auto-mapper/auto-mapper.service';
import { UserAutoMapperDatabaseProfile } from '@base/lib/mapper/implementation/auto-mapper/profile/database/user.auto-mapper.database.profile';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  providers: [AutoMapperService, UserAutoMapperDatabaseProfile],
  exports: [AutoMapperService],
})
export class AutoMapperModule {
  protected readonly _type = AutoMapperModule.name;
}
