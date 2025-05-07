import type { Constructor } from '@automapper/core';

export abstract class MapperGateway {
  public abstract map<TSource, TDestination>(
    source: TSource,
    sourceType: Constructor<TSource>,
    destination: Constructor<TDestination>,
  ): TDestination;

  public abstract mapArray<TSource, TDestination>(
    sourceArray: TSource[],
    sourceType: Constructor<TSource>,
    destination: Constructor<TDestination>,
  ): TDestination[];
}
