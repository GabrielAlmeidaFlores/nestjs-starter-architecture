import { InvalidGuidError } from '@core/domain/entity/base/value-object/guid/error/invalid-guid.error';
import { Fail } from '@shared/feature/functional/function/fail.function';
import { Ok } from '@shared/feature/functional/function/ok.function';

import type { EitherType } from '@shared/feature/functional/type/either.type';

export class Guid {
  public readonly value: string;

  protected readonly _type = Guid.name;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): EitherType<InvalidGuidError, Guid> {
    if (!Guid.isValid(value)) {
      return Fail(new InvalidGuidError());
    }

    return Ok(new Guid(value));
  }

  public static generate(): Guid {
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

  public static isValid(value: string): boolean {
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
