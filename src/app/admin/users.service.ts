import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http : HttpClient) { }
  baseUrl = `${environment.apiUrl}/`;
  url = `${environment.apiUrl}/send-data`;
  regStu: any;

  fetchMembers(){
    return this.http.get(this.baseUrl+'user/get-members')
  }

  deleteService(data:any){
    return this.http.post(this.baseUrl+'user/delete-user',data,{responseType: 'text'})
  }

  // data: { group_id, user_id }
  assignLeader(data:any){
    return this.http.post(this.baseUrl+'group/assign-leader',data,{responseType : 'text'})
  }

  // data: { group_id, user_id }
  removeLeader(data:any){
    return this.http.post(this.baseUrl+'group/remove-leader',data,{responseType : 'text'})
  }

  getGroup(data:any){
    return this.http.post(this.baseUrl+'user/get-personal-information',data)
  }
}
