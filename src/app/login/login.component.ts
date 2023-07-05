import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private loginservice:LoginService){}
username = new FormControl('', [Validators.required, Validators.minLength(4)]);
password = new FormControl('', [Validators.required, Validators.minLength(8)]);
login(){
  this.loginservice.login(this.username.value??'', this.password.value??'')
}
}
