export interface ValueObjectInterface<T> {
  value: string;
  equals(other: T): boolean;
  toString(): string;
}
