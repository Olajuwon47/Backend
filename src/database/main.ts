import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*app.enableCors()*/
  app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: ['GET', 'POST'],         // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow only headers with Content-Type
  });
  await app.listen(3000);
}
bootstrap();

  