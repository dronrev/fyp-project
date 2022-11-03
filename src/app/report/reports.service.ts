import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report.model';
import { Event } from '../event/event.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }
  theUrl = "http://localhost/fyp-project/report/";

  displayReport(data:any){
    //const data = localStorage.getItem('id');
   // console.log(id);
    return this.http.post(this.theUrl+'get-report.php',data,{responseType:'text'})
  }
  newReport(data:any){
    return this.http.post(this.theUrl+'new-report.php',data,{responseType:'text'})
  }
  getDetail(id:any){
    return this.http.post(this.theUrl+'get-report-details.php',id,{responseType:'text'})
  }
}
