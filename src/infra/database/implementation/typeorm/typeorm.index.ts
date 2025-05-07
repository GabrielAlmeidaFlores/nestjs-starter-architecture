import { TypeOrmModule } from '@nestjs/typeorm';

import { UserTypeormEntity } from '@infra/database/implementation/typeorm/entity/user/user.typeorm.entity';
import { UserTypeormRepository } from '@infra/database/implementation/typeorm/repository/user.typeorm.repository';

import type { Provider } from '@nestjs/common';
import type { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

export class TypeormIndex {
  public static readonly entities: EntityClassOrSchema[] = [UserTypeormEntity];
  public static readonly repositories: Provider[] = [UserTypeormRepository];
  public static readonly dynamicModule = TypeOrmModule.forFeature(
    TypeormIndex.entities,
  );

  protected readonly _type = TypeormIndex.name;
}
