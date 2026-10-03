import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http : HttpClient) { }
  baseUrl = `${environment.apiUrl}/user/`;
  attachmentUrl = `${environment.apiUrl}/report/`;

  getProfile(data:any){
    return this.http.post(this.baseUrl+'get-profile',data,{responseType : 'text'})
  }

  uploadAttachment(data:any){
    return this.http.post(this.attachmentUrl+'upload-attachment',data,{responseType : 'text'})
  }
}
