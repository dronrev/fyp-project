import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditreportService {

  private reportId = "";

  //const idReport : any;

  constructor(private http:HttpClient) { }
  url = "http://localhost/fyp-project/report";
  getDetail(id:any){
    return this.http.post(this.url+'get-report-details.php',id,{responseType:'text'})
  }

  getAllParticipants(){
    return this.http.get('http://localhost/fyp-project/e-cert/get-all-participants.php')
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

  getCurrentReport(){
    //localStorage.setItem('reportID',this.reportId);
    return this.reportId;
  }
  setCurrentReport(id:any){
    this.reportId = id;
  }
}
