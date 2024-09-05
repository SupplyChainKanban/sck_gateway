import { Module } from '@nestjs/common';
import { SckDataIngestionController } from './sck_data-ingestion.controller';

@Module({
  controllers: [SckDataIngestionController],
  providers: [],
})
export class SckDataIngestionModule { }
