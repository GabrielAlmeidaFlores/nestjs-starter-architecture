import { Module } from '@nestjs/common';

@Module({})
export class AdminModule {
  protected readonly _type = AdminModule.name;
}
