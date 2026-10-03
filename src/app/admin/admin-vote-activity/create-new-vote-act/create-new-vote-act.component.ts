import { Group, GroupService } from 'src/app/shared/group.service';
import { inject, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';
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
  private groupService = inject(GroupService);
  groups: Group[] = [];

  votingForm: UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder, private service : UsersService,private service2:VoteService,private alertcontrol : AlertService) {

    this.votingForm = this.fb.group({
      title: '',
      date:'',
      group_id:'',
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
  group_id :any;
  vote !: Voting;
  votearray = [];
  testingg : any;
  ngOnInit(): void {
    this.groupService.getGroups().subscribe(
      groups=>{
        this.groups = groups;
      }
    )
    this.votearray.push();
    this.service.fetchMembers().subscribe(
      res=>{
        this.student = res;

      }
    )

  }

  selectGroup(groupId:any){
    this.group_id = groupId;
    this.stuCand = this.student.filter((data:any)=>data.group_id == this.group_id)
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
