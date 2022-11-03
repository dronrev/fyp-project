import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './event.model';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }
  url = "http://localhost/fyp-project/add-event.php";

  displayEvent(){

  }

  addEvent(data:any){
    return this.http.post(this.url,data,{responseType:'text'})
  }
}
