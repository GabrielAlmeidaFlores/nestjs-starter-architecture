import { InvalidGuidError } from '@core/domain/value-object/guid/error/invalid-guid.error';

import type { BaseValueObject } from '@core/domain/value-object/base/base.value-object';

export class Guid implements BaseValueObject<Guid> {
  public readonly value: string;

  protected readonly _type = Guid.name;

  public constructor(value?: string) {
    this.value = value ?? this.generate();

    if (!this.isValid(this.value)) {
      throw new InvalidGuidError();
    }
  }

  public isValid(value: string): boolean {
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

  private generate(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
