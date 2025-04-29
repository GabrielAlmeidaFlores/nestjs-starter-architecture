export abstract class MapperInterface {
  abstract map<TSource, TDestination>(
    source: TSource,
    destination: new () => TDestination,
    sourceType: new () => TSource,
  ): TDestination;

  abstract mapArray<TSource, TDestination>(
    sourceArray: TSource[],
    destination: new () => TDestination,
    sourceType: new () => TSource,
  ): TDestination[];
}
