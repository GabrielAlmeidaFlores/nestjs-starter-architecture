import { EnvironmentVariable } from '@shared/constant/application-variable/utils/environment-variable.object';

export class DatabaseApplicationVariable {
  public static readonly DATABASE_HOST = EnvironmentVariable.getOrThrow<string>(
    'DATABASE_HOST',
    String,
  );

  public static readonly DATABASE_PORT = EnvironmentVariable.getOrThrow<number>(
    'DATABASE_PORT',
    Number,
  );

  public static readonly DATABASE_NAME = EnvironmentVariable.getOrThrow<string>(
    'DATABASE_NAME',
    String,
  );

  public static readonly DATABASE_USERNAME =
    EnvironmentVariable.getOrThrow<string>('DATABASE_USERNAME', String);

  public static readonly DATABASE_PASSWORD =
    EnvironmentVariable.getOrThrow<string>('DATABASE_PASSWORD', String);

  protected readonly _type = DatabaseApplicationVariable.name;
}
