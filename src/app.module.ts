import { Module } from '@nestjs/common';
import { SckDataIngestionModule } from './sck_data-ingestion/sck_data-ingestion.module';


@Module({
  imports: [SckDataIngestionModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
