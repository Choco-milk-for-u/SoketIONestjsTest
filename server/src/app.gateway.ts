import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "dgram";

@WebSocketGateway({cors: true})
export class AppGateWay {
    @WebSocketServer()
    server;

    @SubscribeMessage('connection')
    handelStart(@MessageBody() data: any, @ConnectedSocket() client: Socket){
        client.emit('connected', true);
    }
    @SubscribeMessage('message')
    handelMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket){
        client.emit('message', data);
    }
    @SubscribeMessage('announcment')
    handelAnnouncment(@MessageBody() data: any){
        this.server.emit('announcment', data);
    }
}