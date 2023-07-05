import { Component, forwardRef } from '@angular/core';
import { RegisterService } from './register.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private RegisterServices:RegisterService){}
  selectedOption!: string;
  fullname =new FormControl('', [Validators.required, Validators.minLength(8)]);
  phone =new FormControl('', [Validators.required, Validators.minLength(8)]);
  email =new FormControl('',[Validators.required]);
  address=new FormControl('',[Validators.required]);
  username =new FormControl('', [Validators.required, Validators.minLength(8)]);
  password= new FormControl('', [Validators.required, Validators.minLength(8)]);
  restownerfullname=new FormControl('', [Validators.required, Validators.minLength(8)]);
  restownerphon=new FormControl('', [Validators.required, Validators.minLength(8)]);
  restaurantname=new FormControl('',[Validators.required,Validators.minLength(2)]);
  restauranaddress=new FormControl('',[Validators.required]);
  restownerusername =new FormControl('', [Validators.required, Validators.minLength(8)]);
  restownerpassword= new FormControl('', [Validators.required, Validators.minLength(8)]);
register(){
  if(this.selectedOption == 'customer'){
    this.RegisterServices.Register(
      this.fullname.value ?? '',
      this.phone.value ?? '',
      this.email.value ?? '',
      this.address.value ?? '',
      this.username.value??'',
      this.password.value??'',)
    }

    else if (this.selectedOption == 'restaurant'){
      this.RegisterServices.Register(
        this.restownerfullname.value ?? '',
        this.restownerphon.value ?? '',
        this.restaurantname.value ?? '',
        this.restauranaddress.value ?? '',
        this.restownerusername.value ?? '',
        this.restownerpassword.value ?? '',
      )
    }
}
}