import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
import { VoteService } from './vote.service';

@Component({
  standalone: false,
  selector: 'app-admin-vote-activity',
  templateUrl: './admin-vote-activity.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin-vote-activity.component.css']
})
export class AdminVoteActivityComponent implements OnInit {

  constructor(private service : VoteService,private alertcontrol : AlertService) { }

  list : any

  ngOnInit(): void {
    this.service.getAllVote().subscribe(
      res=>{
        this.list = res;
      }
    )
  }

  detail(data:any,group_id:any){
    localStorage.setItem('_vote_id_',data);
    localStorage.setItem('_vote_group_id_',group_id)
  }

  edit(data:any){
    localStorage.setItem('_vote_id_',data);
  }
  deleteVote(data:any){
    this.service.deleteThisVote(data).subscribe(
      res=>{
        this.notify(JSON.parse(res).message)
      }
    )
  }

  async notify(data:any){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : data,
      buttons : [{text :'Continue',  handler:()=>{location.reload()}}]
    });
    await messages.present();
  }

}
