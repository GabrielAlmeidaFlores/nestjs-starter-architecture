export abstract class MapperInterface {
  public abstract map<TSource, TDestination>(
    source: TSource,
    destination: new () => TDestination,
    sourceType: new () => TSource,
  ): TDestination;

  public abstract mapArray<TSource, TDestination>(
    sourceArray: TSource[],
    destination: new () => TDestination,
    sourceType: new () => TSource,
  ): TDestination[];
}
