import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LectReportService {

  constructor(private http : HttpClient) { }
  baseUrl = "";

  sendComment(data:any){
    return this.http.post(this.baseUrl,data)
  }

}
