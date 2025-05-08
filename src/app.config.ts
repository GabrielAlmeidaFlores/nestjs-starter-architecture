import { readFileSync } from 'fs';
import { join } from 'path';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { MainApplicationVariable } from '@shared/constant/application-variable/main.application-variable';

import type { INestApplication } from '@nestjs/common';

interface PackageJsonInterface {
  name: string;
  description: string;
  version: string;
}

class AppConfigUtils {
  protected readonly _type = AppConfigUtils.name;

  protected loadPackageJson(): PackageJsonInterface | null {
    const possiblePaths = [join(process.cwd(), 'package.json')];

    for (const path of possiblePaths) {
      try {
        const { name, description, version } = JSON.parse(
          readFileSync(path, 'utf-8'),
        ) as PackageJsonInterface;

        return { name, description, version };
      } catch {}
    }

    return null;
  }
}

export class AppConfig extends AppConfigUtils {
  protected override readonly _type = AppConfig.name;

  public constructor(private readonly app: INestApplication) {
    super();
  }

  public cors(): this {
    this.app.enableCors({
      origin: true,
      methods: '*',
    });

    return this;
  }

  public globalPrefix(): this {
    this.app.setGlobalPrefix(MainApplicationVariable.BASE_PATH);

    return this;
  }

  public swagger(): this {
    const packageJson = this.loadPackageJson();

    const config = new DocumentBuilder().addBearerAuth();

    if (packageJson) {
      config
        .setTitle(packageJson.name)
        .setDescription(packageJson.description)
        .setVersion(packageJson.version);
    }

    const build = config.build();

    const document = SwaggerModule.createDocument(this.app, build);
    SwaggerModule.setup(
      `${MainApplicationVariable.BASE_PATH}/docs`,
      this.app,
      document,
    );

    return this;
  }
}
