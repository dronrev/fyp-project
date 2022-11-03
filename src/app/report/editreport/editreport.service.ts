import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditreportService {

  constructor(private http:HttpClient) { }
  url = "http://localhost/fyp-project/report";
  getDetail(id:any){
    return this.http.post(this.url+'get-report-details.php',id,{responseType:'text'})
  }

  getParticipants(id:any){
    return this.http.post('http://localhost/fyp-project/e-cert/get-participant.php',id,{responseType : 'text'})
  }

  addParticipant(id:any){
    return this.http.post('http://localhost/fyp-project/e-cert/send-participant.php',id,{responseType : 'text'})
  }
  deleteParticipant(id:any){
    return this.http.post('http://localhost/fyp-project/e-cert/delete-participants.php',id,{responseType : 'text'})
  }
}
