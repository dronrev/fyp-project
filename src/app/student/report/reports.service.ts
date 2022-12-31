import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }
  theUrl = "http://localhost/fyp-project/report/";

  displayAll(){
    return this.http.get(this.theUrl+'displayAll.php')
  }

  displayReport(data:any){
    //const data = localStorage.getItem('id');
   // console.log(id);
    return this.http.post(this.theUrl+'get-report-com.php',data,{responseType:'text'})
  }
  newReport(data:any){
    return this.http.post(this.theUrl+'new-report.php',data,{responseType:'text'})
  }
  getDetail(id:any){
    return this.http.post(this.theUrl+'get-report-details.php',id,{responseType:'text'})
  }

  getLecturer(){
    return this.http.get(this.theUrl+'get-all-lecturer.php')
  }

  sendReport(data:any){
    return this.http.put(this.theUrl+'update-report.php',data,{responseType : 'text'})
  }

  approveReport(data:any){
    return this.http.put(this.theUrl+'update-status.php',data)
  }
  deleteReport(data:any){
    return this.http.post(this.theUrl+'delete-report.php',data,{responseType : 'text'})
  }
}
