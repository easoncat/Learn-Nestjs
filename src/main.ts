import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(session({
    secret: "Eason",
    rolling: true,
    name: 'gys.sid',
    cookie: {maxAge: 9999999}
  }));
  // app.enableCors();
  app.useStaticAssets(join(__dirname, 'images'))
  await app.listen(4096);
}
bootstrap();
