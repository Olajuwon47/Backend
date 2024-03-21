import { ApplicationConfig, NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
await app.listen(3000);
  /*app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: ['GET', 'POST'],         // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow only headers with Content-Type
  });*/
  console.log ('Application is running on:http://localhost:3000');
}
bootstrap();
