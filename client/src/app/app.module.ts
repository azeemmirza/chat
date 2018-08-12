import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

//Components
import {AppComponent, LoginComponent, SignInComponent, SignUpComponent, MessageListComponent, ChatComponent}
from "./app.includes";

//Service
import {ChatService} from './services/chat.service';
import {AuthService} from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageListComponent,
    ChatComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
