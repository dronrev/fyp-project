import { Group, GroupService } from 'src/app/shared/group.service';
import { inject, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';
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
  private groupService = inject(GroupService);
  groups: Group[] = [];

  votingForm: UntypedFormGroup;

  constructor(private alertcontrol : AlertService,private fb:UntypedFormBuilder, private service : UsersService,private service2:VoteService) {

    this.votingForm = this.fb.group({
      vote_id:localStorage.getItem('_vote_id_'),
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

  removeCandidate(i:number,data:any) {
    this.detail().removeAt(i);
    const candiDetails = {user_id : data, vote_id : localStorage.getItem('_vote_id_')}
    this.service2.deleteCandidate(candiDetails).subscribe(
      res=>{
      }
    )

  }

  onSubmit() {
    this.votingForm.value.group_id = this.group_id
    this.service2.editVote(this.votingForm.value).subscribe(
      res=>{
        this.notify(JSON.parse(res).message)
      }
    )
  }

  student : any;
  vote !: Voting;
  votearray = [];
  group_id :any;
  stuCand:any;
  testingg : any;
  voteTitle : any;
  dateVote : any;
  ngOnInit(): void {
    this.groupService.getGroups().subscribe(
      groups=>{
        this.groups = groups;
      }
    )
    this.service.fetchMembers().subscribe(
      res=>{
        this.student = res;
      }
    )

    this.service2.getSpecVote(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        this.voteTitle = JSON.parse(res)[0].title;
        this.dateVote = JSON.parse(res)[0].date;
        this.group_id = JSON.parse(res)[0].group_id;
        this.stuCand = this.student.filter((data:any)=>data.group_id == this.group_id)
        for(let item of JSON.parse(res)){
          this.detail().push(this.fb.group({
            matric_no: item.user_id,
            candidate: item.candidate
          }));
        }
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
