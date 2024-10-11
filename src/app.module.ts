import { Module } from '@nestjs/common';
import { SckDataIngestionModule } from './sck_data-ingestion/sck_data-ingestion.module';
import { SckDataValidationModule } from './sck_data_validation/sck_data_validation.module';
import { TransportsModule } from './transports/transports.module';
import { SckAuthorizationModule } from './sck_authorization/sck_authorization.module';
import { SckAnalyticsModule } from './sck_analytics/sck_analytics.module';
import { SckOrdersModule } from './sck_orders/sck_orders.module';


@Module({
  imports: [SckDataIngestionModule, SckDataValidationModule, TransportsModule, SckAuthorizationModule, SckAnalyticsModule, SckOrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
