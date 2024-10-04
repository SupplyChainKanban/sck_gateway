import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './common';

async function main() {

  const logger = new Logger('Main-Gateway')

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  app.useGlobalFilters(new RpcCustomExceptionFilter())
  app.enableCors({
    // origin: 'http://localhost:3001', // Cambia esto según sea necesario
    // methods: 'GET, POST, PUT, DELETE, OPTIONS',
    // allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(envs.port);

  logger.log(`Gateway running on port ${envs.port} `)


}
main();
