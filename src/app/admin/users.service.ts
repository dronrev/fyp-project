import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http : HttpClient) { }
  baseUrl = "http://localhost/fyp-project/";
  url = "http://localhost/fyp-project/send-data.php";
  regStu: any;

  fetchStudent(){
    return this.http.get(this.baseUrl+'user/get-students.php')
  }

  deleteService(data:any){
    return this.http.post(this.baseUrl+'user/delete-user.php',data,{responseType: 'text'})
  }

  sendLecturer(data:any){
    return this.http.post(this.baseUrl+'lecturer/sendData.php',data,{responseType : 'text'})
  }

  assignPresident(data:any){
    return this.http.post(this.baseUrl+'user/assignPresident.php',data,{responseType : 'text'})
  }

  assignPresidentLabuan(data:any){
    return this.http.post(this.baseUrl+'user/assignPresidentLabuan.php',data,{responseType : 'text'})
  }


  updateRole(data:any){
    return this.http.post(this.baseUrl+'user/update-role.php',data,{responseType : 'text'})
  }
}
