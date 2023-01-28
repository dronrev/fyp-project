import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.css']
})
export class VoteResultComponent implements OnInit {

  constructor(private service : EventsService) { }

  list :any;

  ngOnInit(): void {
    this.service.displayEvent().pipe(map((data:any)=>data.filter((myData:any)=>myData.user_id == localStorage.getItem('id'))))
    .subscribe(
      res=>{
        console.log(res)
        this.list = res;
      }
    )
  }

  setCurrentVoteId(data:any){
    localStorage.setItem('_dietov_current_',data)
  }
}
