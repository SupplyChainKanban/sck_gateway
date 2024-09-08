import { Module } from '@nestjs/common';
import { SckDataIngestionController } from './sck_data-ingestion.controller';
import { TransportsModule } from 'src/transports/transports.module';

@Module({
  controllers: [SckDataIngestionController],
  providers: [],
  imports: [
    TransportsModule,
  ],
})
export class SckDataIngestionModule { }
