export class Guid {
  public readonly value: string;

  protected readonly _type = Guid.name;

  constructor(value: string) {
    if (!Guid.isValid(value)) {
      throw new Error(`Invalid ${this._type}: ${value}`);
    }
    this.value = value;
  }

  static create(): Guid {
    const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );

    return new Guid(guid);
  }

  static isValid(value: string): boolean {
    const guidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return guidRegex.test(value);
  }

  public equals(other: Guid): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
