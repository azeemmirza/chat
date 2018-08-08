import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import * as io  from 'socket.io-client';
@Injectable()
export class ChatService {

  private socket;
  constructor() {
    this.socket = io.connect('http://localhost:3000');
  }

  // Emitter
  sendMessage (msg: string) {
    this.socket.emit('chat', {message : msg});
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
