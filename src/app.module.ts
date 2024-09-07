import { Module } from '@nestjs/common';
import { SckDataIngestionModule } from './sck_data-ingestion/sck_data-ingestion.module';
import { SckDataValidationModule } from './sck_data_validation/sck_data_validation.module';


@Module({
  imports: [SckDataIngestionModule, SckDataValidationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
