import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MapperModule } from '@base/lib/mapper/mapper.module';
import { TypeormIndex } from '@infra/database/implementation/typeorm/typeorm.index';
import { DatabaseApplicationVariable } from '@shared/constant/application-variable/database.application-variable';

@Module({
  imports: [
    MapperModule,
    TypeormIndex.dynamicModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: DatabaseApplicationVariable.DATABASE_HOST,
        port: DatabaseApplicationVariable.DATABASE_PORT,
        database: DatabaseApplicationVariable.DATABASE_NAME,
        username: DatabaseApplicationVariable.DATABASE_USERNAME,
        password: DatabaseApplicationVariable.DATABASE_PASSWORD,
        autoLoadEntities: true,
        synchronize: false,
        retryAttempts: 5,
        retryDelay: 3000,
        connectTimeout: 10000,
      }),
    }),
  ],
  providers: TypeormIndex.repositories,
  exports: [TypeormIndex.dynamicModule, ...TypeormIndex.repositories],
})
export class TypeormModule {
  protected readonly _type = TypeormModule.name;
}
