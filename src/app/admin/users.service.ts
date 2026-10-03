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

  fetchStudent(){
    return this.http.get(this.baseUrl+'user/get-students')
  }

  deleteService(data:any){
    return this.http.post(this.baseUrl+'user/delete-user',data,{responseType: 'text'})
  }

  sendLecturer(data:any){
    return this.http.post(this.baseUrl+'lecturer/sendData',data,{responseType : 'text'})
  }

  assignPresident(data:any){
    return this.http.post(this.baseUrl+'user/assignPresident',data,{responseType : 'text'})
  }

  assignPresidentLabuan(data:any){
    return this.http.post(this.baseUrl+'user/assignPresidentLabuan',data,{responseType : 'text'})
  }


  updateRole(data:any){
    return this.http.post(this.baseUrl+'user/update-role',data,{responseType : 'text'})
  }

  getCawangan(data:any){
    return this.http.post(this.baseUrl+'user/get-personal-information',data)
  }
}
