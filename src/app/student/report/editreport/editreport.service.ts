import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditreportService {

  private reportId = "";

  //const idReport : any;

  constructor(private http:HttpClient) { }
  url = `${environment.apiUrl}/report`;
  getDetail(id:any){
    return this.http.post(this.url+'get-report-details.php',id,{responseType:'text'})
  }

  getAllParticipants(){
    return this.http.get(`${environment.apiUrl}/e-cert/get-all-participants.php`)
  }

  getParticipants(id:any){
    return this.http.post(`${environment.apiUrl}/e-cert/get-participant.php`,id,{responseType : 'text'})
  }

  addParticipant(id:any){
    return this.http.post(`${environment.apiUrl}/e-cert/send-participant.php`,id,{responseType : 'text'})
  }
  deleteParticipant(id:any){
    return this.http.post(`${environment.apiUrl}/e-cert/delete-participants.php`,id,{responseType : 'text'})
  }

  getCurrentReport(){
    //localStorage.setItem('reportID',this.reportId);
    return this.reportId;
  }
  setCurrentReport(id:any){
    this.reportId = id;
  }
}
