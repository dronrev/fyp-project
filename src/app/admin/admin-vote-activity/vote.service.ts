import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http : HttpClient) { }
  baseUrl = "http://localhost/fyp-project/voting/";

  createVote(data:any){
    return this.http.post(this.baseUrl+'create-new-voting-event.php',data,{ responseType : 'text'})
  }
  editVote(data:any){
    return this.http.post(this.baseUrl+'edit-vote.php',data,{responseType : 'text'})
  }
  getAllVote(){
    return this.http.get(this.baseUrl+'get-all-vote-acti.php')
  }
  getSpecVote(data:any){
    return this.http.post(this.baseUrl+'select-vote-event.php',data,{responseType : 'text'})
  }
  deleteCandidate(data:any){
    return this.http.post(this.baseUrl+'delete-candidate.php',data,{responseType : 'text'})
  }
  deleteThisVote(data:any){
    return this.http.post(this.baseUrl+'delete-vote.php',data,{responseType : 'text'})
  }
  getVoteEvent(data:any){
    return this.http.post(this.baseUrl+'get-spec-vote.php',data)
  }
  getTotalCandidateEvent(data:any){
    return this.http.post(this.baseUrl+'total-candidate-event.php',data)
  }
  getTotalVotersVoted(data:any){
    return this.http.post(this.baseUrl+'voters-voted.php',data)
  }
  getCandidate(data:any){
    return this.http.post(this.baseUrl+'get-candidates.php',data,{responseType : 'text'})
  }
}
