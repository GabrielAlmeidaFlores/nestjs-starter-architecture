export abstract class BaseError extends Error {
  public readonly timestamp = new Date();

  public constructor() {
    super();
  }
}
