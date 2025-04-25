export class FederalDocument {
  public readonly value: string;

  protected readonly _type = FederalDocument.name;

  constructor(value: string) {
    if (!FederalDocument.isValid(value)) {
      throw new Error(`Invalid ${this._type}: ${value}`);
    }
    this.value = value;
  }

  static isValid(value: string): boolean {
    const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

    const rgRegex = /^[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-?[0-9Xx]{1}$/;

    return cpfRegex.test(value) || rgRegex.test(value);
  }

  public equals(other: FederalDocument): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
