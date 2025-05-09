import type { ApplicationVariableEnum } from '@infra/application-variable/application-variable.enum';

export abstract class ApplicationVariableInterface {
  public abstract get<T>(key: ApplicationVariableEnum): T | null;
}
