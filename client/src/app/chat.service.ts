import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: SocketIOClient.Socket;
  constructor() {
    this.socket = io('http://localhost:3000');
  }

  // Emitter
  sendMessage (msg: string) {
    this.socket.emit('sendMessage', {message : msg});
  }

  // Handler
  onNewMessage () {
    return Observable.create(observer => {
      this.socket.on('newMessage', msg => {
        observer.next(msg);
      });
    });
  }
}
