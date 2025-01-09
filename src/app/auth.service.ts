import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private userRole : string = ""; 

  constructor() { }

  login(userName:string, password:string){
    if(userName === "admin" && password === "admin@123"){
      this.loggedIn = true;
      this.userRole = "admin";
      return true;
    } else if(userName === "user" && password === "user@123"){
      this.loggedIn  = true;
      this.userRole = "user";
      return true;
    }
    return false;
  }

  logOut(){
    this.loggedIn = false;
    this.userRole = "";
  }

  isAuthenticated():boolean{
    return this.loggedIn;
  }

  getUserRole():string{
    return this.userRole;
  }

}
