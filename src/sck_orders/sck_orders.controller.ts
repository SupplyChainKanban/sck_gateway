import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { SCK_NATS_SERVICE } from 'src/config';

@Controller('sck-orders')
export class SckOrdersController {
  constructor(
    @Inject(SCK_NATS_SERVICE) private readonly client: ClientProxy
  ) { }

  @Get()
  findAllOrders() {
    return this.client.send('findAllOrders', {})
      .pipe(catchError(err => { throw new RpcException(err) }));
  }
}
