import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER: string = 'user';
  constructor(private router: Router) { }


  addUser(name: string){

  }

  getUser(){

  }

  deleteUser(){

  }

  isLoggedin(){
    
  }
}
