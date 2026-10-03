import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  url = `${environment.apiUrl}/announcement/`;
  constructor(private http : HttpClient) { }
  private announcementID = "";
  createNewAnnouncement(data:any){
    return this.http.post(this.url+'create-new-announcement',data,{responseType : 'text'})
  }

  getFullAnnouncement(){
    return this.http.get(this.url+'get-full-announcement')
  }

  getAllAnnouncement(){
    return this.http.get(this.url+'get-all-announcement')
  }
  getAllAdminAnnouncement(){
    return this.http.get(this.url+'get-admin-announcement')
  }
  setCurrentAnnouncement(id:any){
    this.announcementID = id;
  }
  getCurrentAnnouncement(){
    return this.announcementID
  }
  infoStudentAnnounce(){
    return this.http.get(`${environment.apiUrl}/announcement/get-info-student`)
  }
  emailAnnouncement(data:any){
    return this.http.post(`${environment.apiUrl}/announcement/email-announcement`,data,{responseType : 'text'})
  }
  editAnnouncement(data:any){
    return this.http.post(this.url+'edit-announcement',data,{responseType : 'text'})
  }
  deleteAnnounce(data:any){
    return this.http.post(`${environment.apiUrl}/announcement/delete-announcement`,data,{responseType :'text'})
  }
  saveAnnouncementImage(data:any){
    return this.http.post(this.url+'save-image',data,{responseType : 'text'})
  }
  getAnnouncementImage(data:any){
    return this.http.post(this.url+'get-attachment',data,{responseType : 'text'})
  }
}
