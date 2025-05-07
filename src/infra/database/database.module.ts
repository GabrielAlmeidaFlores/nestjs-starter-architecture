import { Module } from '@nestjs/common';

import { UserRepositoryGateway } from '@core/domain/repository/user.repository.gateway';
import { UserTypeormRepository } from '@infra/database/implementation/typeorm/repository/user.typeorm.repository';
import { TypeormModule } from '@infra/database/implementation/typeorm/typeorm.module';

@Module({
  imports: [TypeormModule],
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
