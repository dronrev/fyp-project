import { PORTAL } from 'src/app/shared/app-config';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${environment.apiUrl}/auth/login`;
  constructor(private http:HttpClient,private router:Router) { }

  public userName: any = [];
  private name = new BehaviorSubject(this.userName);
  currentName = this.name.asObservable();
  matric_number = "";
  changeName(message:string){
    this.name.next(message);
  }

  // Returns { token, id, name, email_address, role, group_id } as JSON text.
  login(credentials:any){
    return this.http.post(this.loginUrl,credentials,{responseType: 'text'})
  }

  private isSignedInTo(portal:string){
    return localStorage.getItem('token')!=null && localStorage.getItem('portal')==portal;
  }

  isMember(){
    return this.isSignedInTo(PORTAL.member);
  }

  isReviewer(){
    return this.isSignedInTo(PORTAL.reviewer);
  }

  isAdmin(){
    return this.isSignedInTo(PORTAL.admin);
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }

  logOut(){
    localStorage.clear();
    return this.router.navigate(['sign-in'])
  }
}
