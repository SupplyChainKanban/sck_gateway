import { Module } from '@nestjs/common';
import { OrdersWsService } from './orders-ws.service';
import { OrdersWsGateway } from './orders-ws.gateway';
import { TransportsModule } from 'src/transports/transports.module';

@Module({
  providers: [OrdersWsGateway, OrdersWsService],
  imports: [TransportsModule],
  exports: [OrdersWsGateway]
})
export class OrdersWsModule { }
