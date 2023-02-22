import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // この処理をはさむことでvalidationチェックを有効にする
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
