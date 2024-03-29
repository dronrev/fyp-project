import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './event.model';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }
  url = "http://localhost/fyp-project/add-event.php";
  eventUrl = "http://localhost/fyp-project/event/";
  deleteUrl = "http://localhost/fyp-project/event/delete-event.php";
  baseUrl = "http://localhost/fyp-project/event/get-event.php";
  voteUrl = "http://localhost/fyp-project/voting/send-vote.php";
  voteBaseUrl = "http://localhost/fyp-project/voting/";
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
    return this.http.get(this.eventUrl+'get-complete-event.php')
  }

  sendvote(data:any){
    return this.http.post(this.voteUrl,data,{responseType :'text'})
  }

  AlreadyVote(data:any){
    return this.http.post(this.voteBaseUrl+"send-vote-verify.php",data,{responseType : 'text'})
  }

  voteCount(data:any){
    return this.http.post(this.voteBaseUrl+'get-vote-count.php',data,{responseType : 'text'})
  }

  verifyUserVoting(data:any){
    return this.http.post(this.voteBaseUrl+'check-if-user-already-voting.php',data)
  }
  getCandidate(data:any){
    return this.http.post(this.voteBaseUrl+'get-candidates.php',data,{responseType : 'text'})
  }
  enterVote(data:any){
    return this.http.post(this.voteBaseUrl+'enter-vote.php',data)
  }

}
