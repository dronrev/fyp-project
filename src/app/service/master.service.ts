import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  isLoggedIn(){
    return localStorage.getItem("username")!=null;
  }

  roleAccess(menuname:any){
    const role = localStorage.getItem("role");
    if(role == 'admin'){
      return true;
    }else{
      if(menuname=='contact'){
        return true;
      }
      else{
        return false;
      }
    }
  }
}
