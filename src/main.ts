import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';

async function bootstrap() {
  const config = configuration();
  const app = await NestFactory.create(AppModule);
  await app.listen(config.api.PORT);
}
bootstrap();
