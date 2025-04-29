import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

import { MapperInterface } from '@base/lib/mapper/mapper.interface';

@Injectable()
export class AutoMapperService implements MapperInterface {
  protected readonly _type = AutoMapperService.name;

  constructor(@InjectMapper() private readonly mapper: Mapper) {}

  map<TSource, TDestination>(
    source: TSource,
    destination: new () => TDestination,
    sourceType: new () => TSource,
  ): TDestination {
    return this.mapper.map(source, sourceType, destination);
  }
  mapArray<TSource, TDestination>(
    sourceArray: TSource[],
    destination: new () => TDestination,
    sourceType: new () => TSource,
  ): TDestination[] {
    return sourceArray.map((source) =>
      this.mapper.map(source, sourceType, destination),
    );
  }
}
