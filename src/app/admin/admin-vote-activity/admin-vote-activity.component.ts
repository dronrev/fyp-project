import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { VoteService } from './vote.service';

@Component({
  standalone: false,
  selector: 'app-admin-vote-activity',
  templateUrl: './admin-vote-activity.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin-vote-activity.component.css']
})
export class AdminVoteActivityComponent implements OnInit {

  constructor(private service : VoteService,private alertcontrol : AlertController) { }

  list : any

  ngOnInit(): void {
    this.service.getAllVote().subscribe(
      res=>{
        this.list = res;
      }
    )
  }

  detail(data:any,cawangan:any){
    localStorage.setItem('_vote_id_',data);
    localStorage.setItem('_cawangan_',cawangan)
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
