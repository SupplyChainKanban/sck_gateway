import { Module } from '@nestjs/common';
import { SckOrdersController } from './sck_orders.controller';
import { TransportsModule } from 'src/transports/transports.module';

@Module({
  controllers: [SckOrdersController],
  providers: [],
  imports: [TransportsModule]
})
export class SckOrdersModule { }
