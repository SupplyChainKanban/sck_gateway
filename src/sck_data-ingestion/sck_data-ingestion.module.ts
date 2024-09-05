import { Module } from '@nestjs/common';
import { SckDataIngestionController } from './sck_data-ingestion.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, SCK_DATA_INGESTION_MS } from 'src/config';

@Module({
  controllers: [SckDataIngestionController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: SCK_DATA_INGESTION_MS,
        transport: Transport.TCP,
        options: {
          host: envs.sck_data_ingestion_ms_host,
          port: envs.sck_data_ingestion_ms_port,
        }
      },
    ]),
  ],
})
export class SckDataIngestionModule { }
