import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

import { UserEntity } from '@core/domain/entity/user/user.entity';
import { Email } from '@core/domain/entity/user/value-object/email/email.value-object';
import { FederalDocument } from '@core/domain/entity/user/value-object/federal-document/federal-document.value-object';
import { UserTypeormEntity } from '@infra/database/implementation/typeorm/entity/user/user.typeorm.entity';

@Injectable()
export class UserAutoMapperDatabaseProfile {
  protected readonly _type = UserAutoMapperDatabaseProfile.name;

  public constructor(@InjectMapper() private readonly mapper: Mapper) {
    this.createMappings();
  }

  private createMappings(): void {
    createMap(
      this.mapper,
      UserTypeormEntity,
      UserEntity,
      forMember(
        (dest) => dest.email,
        mapFrom((src) => new Email(src.email)),
      ),
      forMember(
        (dest) => dest.federalDocument,
        mapFrom((src) => new FederalDocument(src.federalDocument)),
      ),
    );

    createMap(
      this.mapper,
      UserEntity,
      UserTypeormEntity,
      forMember(
        (dest) => dest.email,
        mapFrom((src) => src.email.value),
      ),
      forMember(
        (dest) => dest.federalDocument,
        mapFrom((src) => src.federalDocument.value),
      ),
    );
  }
}
