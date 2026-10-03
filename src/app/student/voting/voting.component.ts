import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { VoteService } from 'src/app/admin/admin-vote-activity/vote.service';
import { UsersService } from 'src/app/admin/users.service';
import { EventsService } from '../event/events.service';

@Component({
  standalone: false,
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor(private service : VoteService,private service1 : EventsService,private service2:UsersService) { }

  toCheck = new UntypedFormGroup({
    'user_id' : new UntypedFormControl(localStorage.getItem('id')),
    'name' : new UntypedFormControl(localStorage.getItem('name'))
  })

  filterList :any;
  newList : any;
  list:any;
  myCawangan : any;
  ngOnInit(): void {


    this.service2.getCawangan(localStorage.getItem('id')).subscribe(
      res=>{
        this.myCawangan = res;
      }
    )

    this.service.getAllVote().pipe(map((data:any)=>data.filter((vote:any)=>new Date(vote.date) != new Date()))).subscribe(
      res=>{
        this.list = res;
        for(let item of this.list){
          if(item.cawangan == this.myCawangan[0].cawangan){
            this.list = this.list.filter((data:any)=>data.cawangan == this.myCawangan[0].cawangan)
          }
        }
        this.service1.verifyUserVoting(this.toCheck.value).subscribe(
          res1=>{
            this.filterList = res1;
            for(let item of this.filterList){
              this.list = this.list.filter((data:any)=>(data.vote_id != item.vote_id));
            }
          }
        )

      }
    )
  }

  selectVoting(data:any){
    localStorage.setItem('_vote_id_',data)
  }

}
