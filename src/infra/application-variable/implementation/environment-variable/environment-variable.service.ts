import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ApplicationVariableInterface } from '@infra/application-variable/application-variable.interface';

import type { ApplicationVariableEnum } from '@infra/application-variable/application-variable.enum';

@Injectable()
export class EnvironmentVariableService
  implements ApplicationVariableInterface
{
  protected readonly _type = EnvironmentVariableService.name;

  constructor(private readonly configService: ConfigService) {}

  public get<T>(key: ApplicationVariableEnum): T | null {
    return this.configService.get<T>(key.toString()) ?? null;
  }
}
