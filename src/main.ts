import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './common';
import { Transport } from '@nestjs/microservices';

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
    origin: '*',
    // origin: 'http://localhost:3001', // Cambia esto según sea necesario
    // methods: 'GET, POST, PUT, DELETE, OPTIONS',
    // allowedHeaders: 'Content-Type, Authorization',
  });

  // Habilitar microservicios para NATS
  app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      servers: envs.sckNatsServers,  // Asegúrate de que esta URL esté bien configurada
    },
  });

  await app.startAllMicroservices();

  await app.listen(envs.port);

  logger.log(`Gateway running on port ${envs.port} `)
}

main();
