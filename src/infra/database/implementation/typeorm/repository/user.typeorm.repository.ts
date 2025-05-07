import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MapperGateway } from '@base/lib/mapper/mapper.gateway';
import { Guid } from '@core/domain/entity/base/value-object/guid/guid.value-object';
import { UserEntity } from '@core/domain/entity/user/user.entity';
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
    private readonly mapperGateway: MapperGateway,
  ) {
    super(repository);
  }
  public async createUser(data: UserEntity): Promise<void> {
    const mappedUser = this.mapperGateway.map(
      data,
      UserEntity,
      UserTypeormEntity,
    );

    await this.create(mappedUser);
  }

  public async deleteUser(id: Guid): Promise<void> {
    await this.delete(id.value);
  }
}
