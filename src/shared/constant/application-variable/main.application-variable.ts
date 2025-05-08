import { EnvironmentVariable } from '@shared/constant/application-variable/utils/environment-variable.object';

export class MainApplicationVariable {
  public static readonly BASE_PATH = EnvironmentVariable.getOrDefault(
    'BASE_PATH',
    String,
    '',
  );

  public static readonly PORT = EnvironmentVariable.getOrDefault(
    'PORT',
    Number,
    3000,
  );

  protected readonly _type = MainApplicationVariable.name;
}
