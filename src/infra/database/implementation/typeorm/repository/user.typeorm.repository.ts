import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserTypeormEntity } from '@infra/database/implementation/typeorm/entity/user/user.typeorm.entity';
import { BaseTypeormRepository } from '@infra/database/implementation/typeorm/repository/base.typeorm.repository';

import type { UserRepositoryGateway } from '@core/domain/repository/user.repository.gateway';

@Injectable()
export class UserTypeormRepository
  extends BaseTypeormRepository<UserTypeormEntity>
  implements UserRepositoryGateway
{
  protected readonly _type = UserTypeormRepository.name;

  public constructor(
    @InjectRepository(UserTypeormEntity)
    repository: Repository<UserTypeormEntity>,
  ) {
    super(repository);
  }
}
