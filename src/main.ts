import { NestFactory } from '@nestjs/core';

import { AppConfig } from '@base/app.config';
import { AppModule } from '@base/app.module';
import { MainApplicationVariable } from '@shared/constant/application-variable/main.application-variable';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  new AppConfig(app).cors().globalPrefix().swagger();

  await app.listen(MainApplicationVariable.PORT);
}
void bootstrap();
