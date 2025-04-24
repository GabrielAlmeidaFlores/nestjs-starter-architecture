export interface ValueObjectInterface<T> {
  readonly value: T;
  isValid(): boolean;
  equals(other: ValueObjectInterface<T>): boolean;
  toString(): T;
}
