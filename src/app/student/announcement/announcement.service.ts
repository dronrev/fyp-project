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

  getAllAnnouncement(){
    return this.http.get(this.url+'get-all-announcement.php')
  }
  setCurrentAnnouncement(id:any){
    this.announcementID = id;
  }
  getCurrentAnnouncement(){
    return this.announcementID
  }
}
