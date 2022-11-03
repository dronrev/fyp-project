import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost/fyp-project/app/login.php";
  constructor(private http:HttpClient,private router:Router) { }

  public userName: any = [];
  private name = new BehaviorSubject(this.userName);
  currentName = this.name.asObservable();
  matric_number = "";
  changeName(message:string){
    this.name.next(message);
  }

  proceedLogin(usercred:any){
    return this.http.post(this.url,usercred,{responseType: 'text'})
  }

  isLoggedStudent(){
    return localStorage.getItem('token')!=null && localStorage.getItem('auth')=='1';
  }

  isLoggedLecturer(){
    return localStorage.getItem('token')!=null&& localStorage.getItem('auth')=='2';
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }

  logOut(){
    return this.router.navigate(['login'])
  }
}
