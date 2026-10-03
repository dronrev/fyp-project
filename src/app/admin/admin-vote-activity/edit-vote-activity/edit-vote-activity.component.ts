import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../../users.service';
import { Voting } from '../vote-activity.model';
import { VoteService } from '../vote.service';

@Component({
  standalone: false,
  selector: 'app-edit-vote-activity',
  templateUrl: './edit-vote-activity.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./edit-vote-activity.component.css']
})
export class EditVoteActivityComponent implements OnInit {

  votingForm: UntypedFormGroup;

  constructor(private alertcontrol : AlertController,private fb:UntypedFormBuilder, private service : UsersService,private service2:VoteService) {

    this.votingForm = this.fb.group({
      vote_id:localStorage.getItem('_vote_id_'),
      title: '',
      date:'',
      cawangan:'',
      detail: this.fb.array([])
    });
  }

  detail() : UntypedFormArray {
    return this.votingForm.get("detail") as UntypedFormArray
  }

  newCandidate(): UntypedFormGroup {
    return this.fb.group({
      matric_no: '',
      candidate:''
    })
  }

  addCandidate() {
    this.detail().push(this.newCandidate());
  }

  removeCandidate(i:number,data:any) {
    this.detail().removeAt(i);
    const candiDetails = {user_id : data, vote_id : localStorage.getItem('_vote_id_')}
    this.service2.deleteCandidate(candiDetails).subscribe(
      res=>{
      }
    )

  }

  onSubmit() {
    this.votingForm.value.cawangan = this.cawangan
    this.service2.editVote(this.votingForm.value).subscribe(
      res=>{
        this.notify(JSON.parse(res).message)
      }
    )
  }

  student : any;
  vote !: Voting;
  votearray = [];
  cawangan :any;
  stuCand:any;
  testingg : any;
  voteTitle : any;
  dateVote : any;
  branch : any = ["KK","Labuan"]
  ngOnInit(): void {
    this.service.fetchStudent().subscribe(
      res=>{
        this.student = res;
      }
    )

    this.service2.getSpecVote(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        this.voteTitle = JSON.parse(res)[0].title;
        this.dateVote = JSON.parse(res)[0].date;
        this.cawangan = JSON.parse(res)[0].cawangan;
        this.stuCand = this.student.filter((data:any)=>data.cawangan == this.cawangan)
        for(let item of JSON.parse(res)){
          this.detail().push(this.fb.group({
            matric_no: item.user_id,
            candidate: item.candidate
          }));
        }
      }
    )

  }

  getCawangan(event:any){
    event.target.value
    this.cawangan=event.target.value;
    this.stuCand = this.student.filter((data:any)=>data.cawangan == this.cawangan)
  }


  testAdd(event : any){
    this.testingg = event.value;
    //this.student = this.student.filter((myData:any)=>myData.user_id != event.value)
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
