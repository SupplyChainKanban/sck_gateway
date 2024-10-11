import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { SCK_NATS_SERVICE } from 'src/config';
import { OrdersWsGateway } from 'src/orders-ws/orders-ws.gateway';

@Controller('sck-orders')
export class SckOrdersController {
  constructor(
    @Inject(SCK_NATS_SERVICE) private readonly client: ClientProxy,
    private readonly ordersWsGateway: OrdersWsGateway
  ) { }

  @Get()
  findAllOrders() {
    return this.client.send('findAllOrders', {})
      .pipe(catchError(err => { throw new RpcException(err) }));
  }

  @MessagePattern('order.status.changed')
  handleOrderStatusChange() {
    return this.ordersWsGateway.handleOrderStatusChange();
  }
}
