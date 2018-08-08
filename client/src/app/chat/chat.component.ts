import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  msg: FormGroup;
  constructor( private fb: FormBuilder, private chat: ChatService) { }

  ngOnInit() {
    this.msg = this.fb.group({
      message : [null, Validators.required]
    });
  }

  onSend (a) {
    console.log(a);
    this.chat.sendMessage(a);

  }

}
