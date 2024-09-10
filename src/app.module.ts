import { Module } from '@nestjs/common';
import { SckDataIngestionModule } from './sck_data-ingestion/sck_data-ingestion.module';
import { SckDataValidationModule } from './sck_data_validation/sck_data_validation.module';
import { TransportsModule } from './transports/transports.module';
import { SckAuthorizationModule } from './sck_authorization/sck_authorization.module';


@Module({
  imports: [SckDataIngestionModule, SckDataValidationModule, TransportsModule, SckAuthorizationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
