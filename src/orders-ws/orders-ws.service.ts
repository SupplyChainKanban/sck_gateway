import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface Connectedclients {
    [id: string]: Socket
}

@Injectable()
export class OrdersWsService {

    private connectedClients: Connectedclients = {}

    registerClient(client: Socket) {
        this.connectedClients[client.id] = client
    }

    removeClient(clientId: string) {
        delete this.connectedClients[clientId]
    }

    getConnectedClients(): string[] {
        return Object.keys(this.connectedClients);
    }

}
