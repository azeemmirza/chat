import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor( private http: HttpClient) { }

  signIn (a) {
   return this.http
      .post('http://localhost:3000/auth/signin', a)
      .subscribe((a) => {
        if(a.token || a.status) {
          localStorage.setItem('user', a.token);
          localStorage.setItem('status', a.status);

        } return false;
      }, (e) => {
        console.log(e);
        return false;
      });
  }

  auth (){
    if(localStorage.getItem('user') && localStorage.getItem('status')){
      this.http.post('http://localhost:3000/auth/', {
        token: localStorage.getItem('user'),
        status : localStorage.getItem('status')
      }).subscribe((a)=>{

      })
    }
  }
}
