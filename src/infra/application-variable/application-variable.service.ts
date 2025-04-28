import { Injectable } from '@nestjs/common';

import { ApplicationVariableEnum } from '@infra/application-variable/application-variable.enum';
import { ApplicationVariableInterface } from '@infra/application-variable/application-variable.interface';

@Injectable()
export class ApplicationVariableService
  implements ApplicationVariableInterface
{
  protected readonly _type = ApplicationVariableService.name;

  constructor(
    private readonly applicationVariableInterface: ApplicationVariableInterface,
  ) {}

  public get<T>(key: ApplicationVariableEnum): T | null {
    return this.applicationVariableInterface.get<T>(key);
  }
}
