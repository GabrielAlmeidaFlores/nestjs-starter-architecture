import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepositoryGateway } from '@core/domain/repository/user.repository.gateway';
import { UserTypeormRepository } from '@infra/database/implementation/typeorm/repository/user.typeorm.repository';

@Module({
  imports: [TypeOrmModule],
  providers: [
    {
      provide: UserRepositoryGateway,
      useClass: UserTypeormRepository,
    },
    UserTypeormRepository,
  ],
  exports: [UserRepositoryGateway],
})
export class DatabaseModule {
  protected readonly _type = DatabaseModule.name;
}
