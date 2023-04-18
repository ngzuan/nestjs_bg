import { MessageModule } from './message/message.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  await app.listen(3000);
}
bootstrap();
