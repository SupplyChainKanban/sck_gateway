import { Module } from '@nestjs/common';
import { SckOrdersController } from './sck_orders.controller';
import { TransportsModule } from 'src/transports/transports.module';
import { OrdersWsModule } from 'src/orders-ws/orders-ws.module';

@Module({
  controllers: [SckOrdersController],
  providers: [],
  imports: [TransportsModule, OrdersWsModule]
})
export class SckOrdersModule { }
