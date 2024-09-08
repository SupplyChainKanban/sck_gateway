import { Module } from '@nestjs/common';
import { SckDataIngestionModule } from './sck_data-ingestion/sck_data-ingestion.module';
import { SckDataValidationModule } from './sck_data_validation/sck_data_validation.module';
import { TransportsModule } from './transports/transports.module';


@Module({
  imports: [SckDataIngestionModule, SckDataValidationModule, TransportsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
