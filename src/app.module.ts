import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { MapperModule } from '@base/lib/mapper/mapper.module';
import { AdminModule } from '@base/route/admin/admin.module';
import { ClientModule } from '@base/route/client/client.module';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [
    MapperModule,
    DatabaseModule,
    // ClientModule,
    // AdminModule,
    RouterModule.register([
      {
        path: 'client',
        module: ClientModule,
      },
      {
        path: 'admin',
        module: AdminModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  protected readonly _type = AppModule.name;
}
