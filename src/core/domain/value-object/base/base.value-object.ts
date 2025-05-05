export abstract class BaseValueObject<T> {
  public abstract readonly value: string;

  public abstract isValid(value: string): boolean;
  public abstract equals(other: T): boolean;
  public abstract toString(): string;
}
