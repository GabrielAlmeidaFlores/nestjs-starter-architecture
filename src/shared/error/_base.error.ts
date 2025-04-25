export abstract class BaseError extends Error {
  public readonly timestamp = new Date();
  public abstract readonly source: string;
}
