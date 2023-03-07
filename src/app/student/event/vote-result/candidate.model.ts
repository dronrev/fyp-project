export class Candidate{
  user_id ?: string= "";
  count?:string = "";
  candidate?:string = "";
  vote_id?:string = "";
  id?:number;
  constructor(user_id?:string,count?:string,candidate?:string,vote_id?:string,id?:number){
    this.user_id = user_id;
    this.count = count;
    this.candidate = candidate;
    this.vote_id = vote_id;
    this.id = id;
  }
}
