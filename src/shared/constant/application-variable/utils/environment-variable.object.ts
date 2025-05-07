import 'dotenv/config';
import { MissingApplicationVariableError } from '@shared/constant/application-variable/utils/error/missing-application-variable.error';

export class EnvironmentVariable {
  protected readonly _type = EnvironmentVariable.name;

  public static getOrThrow<T>(
    key: string,
    type: StringConstructor | NumberConstructor | BooleanConstructor,
  ): T {
    const value = process.env[key];

    if (value === undefined) {
      throw new MissingApplicationVariableError(key);
    }

    return EnvironmentVariable.convertValue<T>(value, type, key);
  }

  public static getOrDefault<T>(
    key: string,
    type: StringConstructor | NumberConstructor | BooleanConstructor,
    defaultValue: T,
  ): T {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    try {
      return EnvironmentVariable.convertValue<T>(value, type, key);
    } catch {
      return defaultValue;
    }
  }

  private static convertValue<T>(
    rawValue: string,
    type: StringConstructor | NumberConstructor | BooleanConstructor,
    key: string,
  ): T {
    if (type === Number) {
      const num = Number(rawValue);
      if (isNaN(num)) {
        throw new MissingApplicationVariableError(key);
      }
      return num as T;
    }

    if (type === Boolean) {
      return (rawValue === 'true') as T;
    }

    return rawValue as T;
  }
}
