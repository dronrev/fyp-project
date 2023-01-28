import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http : HttpClient) { }
  baseUrl = "http://localhost/fyp-project/user/";
  attachmentUrl = "http://localhost/fyp-project/report/";

  getProfile(data:any){
    return this.http.post(this.baseUrl+'get-profile.php',data,{responseType : 'text'})
  }

  uploadAttachment(data:any){
    return this.http.post(this.attachmentUrl+'upload-attachment.php',data,{responseType : 'text'})
  }
}
