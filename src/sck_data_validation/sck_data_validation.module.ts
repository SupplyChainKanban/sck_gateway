import { Module } from '@nestjs/common';
import { SckDataValidationController } from './sck_data_validation.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, SCK_DATA_VALIDATION_MS } from 'src/config';

@Module({
  controllers: [SckDataValidationController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: SCK_DATA_VALIDATION_MS,
        transport: Transport.TCP,
        options: {
          // host: envs.sck_data_validation_ms_host,
          // port: envs.sck_data_validation_ms_port,
        }
      }
    ])
  ],
})
export class SckDataValidationModule { }
