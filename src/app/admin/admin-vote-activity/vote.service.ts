import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http : HttpClient) { }
  baseUrl = `${environment.apiUrl}/voting/`;

  createVote(data:any){
    return this.http.post(this.baseUrl+'create-new-voting-event',data,{ responseType : 'text'})
  }
  editVote(data:any){
    return this.http.post(this.baseUrl+'edit-vote',data,{responseType : 'text'})
  }
  getAllVote(){
    return this.http.get(this.baseUrl+'get-all-vote-acti')
  }
  getSpecVote(data:any){
    return this.http.post(this.baseUrl+'select-vote-event',data,{responseType : 'text'})
  }
  deleteCandidate(data:any){
    return this.http.post(this.baseUrl+'delete-candidate',data,{responseType : 'text'})
  }
  deleteThisVote(data:any){
    return this.http.post(this.baseUrl+'delete-vote',data,{responseType : 'text'})
  }
  getVoteEvent(data:any){
    return this.http.post(this.baseUrl+'get-spec-vote',data)
  }
  getTotalCandidateEvent(data:any){
    return this.http.post(this.baseUrl+'total-candidate-event',data)
  }
  getTotalVotersVoted(data:any){
    return this.http.post(this.baseUrl+'voters-voted',data)
  }
  getCandidate(data:any){
    return this.http.post(this.baseUrl+'get-candidates',data,{responseType : 'text'})
  }
}
