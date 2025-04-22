export abstract class AbstractError extends Error {
  public readonly timestamp = new Date();
}
