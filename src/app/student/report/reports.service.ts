import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }
  theUrl = `${environment.apiUrl}/report/`;
  financialUrl = `${environment.apiUrl}/budget/`;
  e_cert = `${environment.apiUrl}/e-cert/`;

  displayAll(){
    return this.http.get(this.theUrl+'displayAll')
  }

  displayReport(data:any){
    //const data = localStorage.getItem('id');
   // console.log(id);
    return this.http.post(this.theUrl+'get-report-com',data,{responseType:'text'})
  }
  newReport(data:any){
    return this.http.post(this.theUrl+'new-report',data,{responseType:'text'})
  }
  getDetail(id:any){
    return this.http.post(this.theUrl+'get-report-details',id,{responseType:'text'})
  }

  getReviewers(){
    return this.http.get(`${environment.apiUrl}/reviewer/get-reviewers`)
  }

  sendReport(data:any){
    return this.http.put(this.theUrl+'update-report',data,{responseType : 'text'})
  }

  approveReport(data:any){
    return this.http.put(this.theUrl+'update-status',data)
  }
  deleteReport(data:any){
    return this.http.post(this.theUrl+'delete-report',data,{responseType : 'text'})
  }

  createReport(data:any){
    return this.http.post(this.theUrl+'new-add-report',data,{responseType: 'text'})
  }

  sendLaporanKewangan(data:any){
    return this.http.post(this.financialUrl+'send-laporan-kewangan',data,{responseType : 'text'})
  }

  totalCount(data:any){
    return this.http.post(this.financialUrl+'budget-count',data,{responseType : 'text'})
  }

  sendPendahuluan(data:any){
    return this.http.post(this.financialUrl+'send-pendahuluan',data,{responseType : 'text'})
  }
  specificLaporanKewangan(data:any){
    return this.http.post(this.financialUrl+'get-budget',data,{responseType : 'text'})
  }
  getPendahuluan(data:any){
    return this.http.post(this.financialUrl+'get-pendahuluan',data,{responseType :'text'})
  }

  countParticipants(data:any){
    return this.http.post(this.e_cert+'count-participants',data,{responseType : 'text'})
  }

  getFinancial(){
    return this.http.get(this.financialUrl+'get-by-date')
  }
}
