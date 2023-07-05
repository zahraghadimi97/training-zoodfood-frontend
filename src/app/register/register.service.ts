import { Injectable } from '@angular/core';
import { BackendService } from '../servises/backend.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private backend:BackendService) {}
  Register(fullname:string,phone:string,email:string,address:string,username:string,password:string){}
  Registerrestaurant(restownerfullname:string,restownerphon:string,restaurantname:string,restauranaddress:string){}
}

