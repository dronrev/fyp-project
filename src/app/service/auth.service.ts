import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${environment.apiUrl}/app/login`;
  cekRole = `${environment.apiUrl}/app/isTDA`;
  adminUrl = `${environment.apiUrl}/admin-login`;
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

  adminLogin(data:any){
    return this.http.post(this.adminUrl,data,{responseType : 'text'})
  }

  isLoggedStudent(){
    return localStorage.getItem('token')!=null && localStorage.getItem('auth')=='1';
  }

  isLoggedLecturer(){
    return localStorage.getItem('token')!=null&& localStorage.getItem('auth')=='2';
  }

  isLoggedAdmin(){
    return localStorage.getItem('token')!=null && localStorage.getItem('auth')=='3';
  }

  isTDA(data:any){
    return this.http.post(this.cekRole,data,{responseType : 'text'})
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }

  logOut(){
    localStorage.clear();
    return this.router.navigate(['sign-in'])
  }
}
