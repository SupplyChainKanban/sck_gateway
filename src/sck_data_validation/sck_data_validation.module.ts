import { Module } from '@nestjs/common';
import { SckDataValidationController } from './sck_data_validation.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, SCK_DATA_VALIDATION_MS } from 'src/config';
import { TransportsModule } from 'src/transports/transports.module';

@Module({
  controllers: [SckDataValidationController],
  providers: [],
  imports: [
    TransportsModule
  ],
})
export class SckDataValidationModule { }
