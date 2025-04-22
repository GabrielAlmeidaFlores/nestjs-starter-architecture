import { randomUUID } from 'crypto';

export class Guid {
  protected readonly _type = Guid.name;
  private readonly value: string;
  private readonly UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  private constructor(uuid: string) {
    if (!this.isValid(uuid)) {
      throw new Error(`Invalid UUID format: ${uuid}`);
    }

    this.value = uuid;
  }

  public create(): Guid {
    return new Guid(randomUUID());
  }

  public from(value: string): Guid {
    return new Guid(value);
  }

  public isValid(value: string): boolean {
    return this.UUID_REGEX.test(value);
  }

  public equals(other: Guid): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }

  public getValue(): string {
    return this.value;
  }
}
