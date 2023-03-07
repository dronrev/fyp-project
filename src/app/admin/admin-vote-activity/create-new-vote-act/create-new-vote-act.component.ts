import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../../users.service';
import { Voting } from '../vote-activity.model';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-create-new-vote-act',
  templateUrl: './create-new-vote-act.component.html',
  styleUrls: ['./create-new-vote-act.component.css']
})
export class CreateNewVoteActComponent implements OnInit {

  votingForm: FormGroup;

  constructor(private fb:FormBuilder, private service : UsersService,private service2:VoteService,private alertcontrol : AlertController) {

    this.votingForm = this.fb.group({
      title: '',
      date:'',
      cawangan:'',
      detail: this.fb.array([])
    });
  }

  detail() : FormArray {
    return this.votingForm.get("detail") as FormArray
  }

  newCandidate(): FormGroup {
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
    console.log(this.votingForm.value);
    this.service2.createVote(this.votingForm.value).subscribe(
      res=>{
        console.log(res)
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
    console.log(event.value);
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
