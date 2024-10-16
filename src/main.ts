import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'https://jobber-or6u6ghop-hefeholuwahs-projects.vercel.app',
      'https://remotelydev.vercel.app',
    ], // Allow requests from your frontend
  });
  await app.listen(3001);
}
bootstrap();
