import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { VoteService } from 'src/app/admin/admin-vote-activity/vote.service';
import { UsersService } from 'src/app/admin/users.service';
import { EventsService } from '../event/events.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor(private service : VoteService,private service1 : EventsService,private service2:UsersService) { }

  toCheck = new FormGroup({
    'user_id' : new FormControl(localStorage.getItem('id')),
    'name' : new FormControl(localStorage.getItem('name'))
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

    // .pipe(map((data:any)=>data.filter((vote:any)=>new Date(vote.date) == new Date())))

    this.service.getAllVote().subscribe(
      res=>{
        this.list = res;
        console.log(this.list)
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
