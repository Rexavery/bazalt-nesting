import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('push')
  handlePush(@MessageBody() data: any) {
    this.server.to(`project-${data.projectId}`).emit('progress', data);
  }

  handleConnection(client: any) {
    const id = client.handshake.query.projectId;
    if (id) client.join(`project-${id}`);
  }
}
