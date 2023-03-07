import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  url = "http://localhost/fyp-project/announcement/";
  constructor(private http : HttpClient) { }
  private announcementID = "";
  createNewAnnouncement(data:any){
    return this.http.post(this.url+'create-new-announcement.php',data,{responseType : 'text'})
  }

  getFullAnnouncement(){
    return this.http.get(this.url+'get-full-announcement.php')
  }

  getAllAnnouncement(){
    return this.http.get(this.url+'get-all-announcement.php')
  }
  getAllAdminAnnouncement(){
    return this.http.get(this.url+'get-admin-announcement.php')
  }
  setCurrentAnnouncement(id:any){
    this.announcementID = id;
  }
  getCurrentAnnouncement(){
    return this.announcementID
  }
  infoStudentAnnounce(){
    return this.http.get("http://localhost/fyp-project/announcement/get-info-student.php")
  }
  emailAnnouncement(data:any){
    return this.http.post("http://localhost/fyp-project/announcement/email-announcement.php",data,{responseType : 'text'})
  }
  editAnnouncement(data:any){
    return this.http.post(this.url+'edit-announcement.php',data,{responseType : 'text'})
  }
  deleteAnnounce(data:any){
    return this.http.post("http://localhost/fyp-project/announcement/delete-announcement.php",data,{responseType :'text'})
  }
  saveAnnouncementImage(data:any){
    return this.http.post(this.url+'save-image.php',data,{responseType : 'text'})
  }
  getAnnouncementImage(data:any){
    return this.http.post(this.url+'get-attachment.php',data,{responseType : 'text'})
  }
}
