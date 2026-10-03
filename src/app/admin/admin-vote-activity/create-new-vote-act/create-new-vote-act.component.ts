import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../../users.service';
import { Voting } from '../vote-activity.model';
import { VoteService } from '../vote.service';

@Component({
  standalone: false,
  selector: 'app-create-new-vote-act',
  templateUrl: './create-new-vote-act.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./create-new-vote-act.component.css']
})
export class CreateNewVoteActComponent implements OnInit {

  votingForm: UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder, private service : UsersService,private service2:VoteService,private alertcontrol : AlertController) {

    this.votingForm = this.fb.group({
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

  removeCandidate(i:number) {
    this.detail().removeAt(i);
  }

  onSubmit() {
    this.service2.createVote(this.votingForm.value).subscribe(
      res=>{
        this.notify(JSON.parse(res).message)
      }
    )
  }

  student : any;
  stuCand : any;
  cawangan :any;
  vote !: Voting;
  votearray = [];
  testingg : any;
  ngOnInit(): void {
    this.votearray.push();
    this.service.fetchStudent().subscribe(
      res=>{
        this.student = res;

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
