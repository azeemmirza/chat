import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor( private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      username : [null, Validators.required],
      password : [null, Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit(a){
    this.auth.signIn(a);
  }

}
