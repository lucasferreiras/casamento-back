import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  await app.listen(process.env.PORT || 5000); // Porta dinâmica para uso em plataformas como Render
}
bootstrap();
