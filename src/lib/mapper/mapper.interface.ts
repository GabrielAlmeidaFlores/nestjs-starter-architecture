export abstract class MapperInterface {
  public abstract map<TSource, TDestination>(
    source: TSource,
    sourceType: new () => TSource,
    destination: new () => TDestination,
  ): TDestination;

  public abstract mapArray<TSource, TDestination>(
    sourceArray: TSource[],
    sourceType: new () => TSource,
    destination: new () => TDestination,
  ): TDestination[];
}
