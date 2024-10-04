import { Module } from '@nestjs/common';
import { SckAnalyticsController } from './sck_analytics.controller';
import { TransportsModule } from 'src/transports/transports.module';

@Module({
  controllers: [SckAnalyticsController],
  providers: [],
  imports: [
    TransportsModule,
  ],
})
export class SckAnalyticsModule { }
