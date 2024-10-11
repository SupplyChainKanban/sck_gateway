import { Inject } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { OrdersWsService } from './orders-ws.service';
import { Server, Socket } from 'socket.io';
import { ClientProxy } from '@nestjs/microservices';
import { SCK_NATS_SERVICE } from 'src/config';

@WebSocketGateway({ cors: true })
export class OrdersWsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server

  constructor(
    @Inject(SCK_NATS_SERVICE) private readonly client: ClientProxy,
    private readonly ordersWsService: OrdersWsService
  ) { }

  handleConnection(client: Socket) {
    this.ordersWsService.registerClient(client)
    this.wss.emit('clients-updated', this.ordersWsService.getConnectedClients())
  }

  handleDisconnect(client: Socket) {
    this.ordersWsService.removeClient(client.id)
    // console.log({ conectados: this.ordersWsService.getConnectedClients() })
    this.wss.emit('clients-updated', this.ordersWsService.getConnectedClients())
  }

  // @EventPattern('order.status.changed')
  // handleOrderStatusChange() {
  //   console.log('Llegó el order.status.changed')
  //   this.wss.emit('OrdersChanged', 'Las órdenes se actualizaron')
  // }

  handleOrderStatusChange() {
    console.log('Llegó el order.status.changed')
    this.wss.emit('OrdersChanged', 'Las órdenes se actualizaron')
  }

}
