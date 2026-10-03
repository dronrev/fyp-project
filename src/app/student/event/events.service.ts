import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './event.model';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }
  url = `${environment.apiUrl}/add-event`;
  eventUrl = `${environment.apiUrl}/event/`;
  deleteUrl = `${environment.apiUrl}/event/delete-event`;
  baseUrl = `${environment.apiUrl}/event/get-event`;
  voteUrl = `${environment.apiUrl}/voting/send-vote`;
  voteBaseUrl = `${environment.apiUrl}/voting/`;
  displayEvent(){
    return this.http.get(this.baseUrl)
  }

  addEvent(data:any){
    return this.http.post(this.url,data,{responseType:'text'})
  }

  deleteEvent(data:any){
    return this.http.post(this.deleteUrl,data,{responseType : 'text'})
  }

  completeEvent(){
    return this.http.get(this.eventUrl+'get-complete-event')
  }

  sendvote(data:any){
    return this.http.post(this.voteUrl,data,{responseType :'text'})
  }

  AlreadyVote(data:any){
    return this.http.post(this.voteBaseUrl+"send-vote-verify",data,{responseType : 'text'})
  }

  voteCount(data:any){
    return this.http.post(this.voteBaseUrl+'get-vote-count',data,{responseType : 'text'})
  }

  verifyUserVoting(data:any){
    return this.http.post(this.voteBaseUrl+'check-if-user-already-voting',data)
  }
  getCandidate(data:any){
    return this.http.post(this.voteBaseUrl+'get-candidates',data,{responseType : 'text'})
  }
  enterVote(data:any){
    return this.http.post(this.voteBaseUrl+'enter-vote',data)
  }

}
