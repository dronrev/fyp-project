import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventsService } from '../../event/events.service';
import { UsersService } from 'src/app/admin/users.service';
import { UntypedFormControl, FormControlName, UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-member',
  templateUrl: './member.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private service : EventsService,private stuService : UsersService) {
   }

  bro : boolean = false;

  today = new Date();
  list : any;
  toCheckList ?:any = [];
  clicking = 0;

   _this_is_not_ok : any;

  toCheck = new UntypedFormGroup({
    'activity_id' : new UntypedFormControl("a1063b974c30fe7d"),
    'matric_id' : new UntypedFormControl(localStorage.getItem('id'))
  })

  ngOnInit(): void {
    this.stuService.fetchMembers().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.user_id == localStorage.getItem('id')))).subscribe(
      (res:any)=>{
        localStorage.setItem('group_id',res[0].group_id);
      }
    )
    this.service.displayEvent().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.date >= this.today.toISOString().split('T')[0]))).subscribe(
      res=>{
        this.list = res.filter((bahagian:any)=>bahagian.group_id == localStorage.getItem('group_id'));
        //console.log(res);
        //to check if already voting for the activity
        for(var test of res){
          this.bro = false;
          //this.toCheckList.push(test)
          this.toCheck.value['activity_id'] = test.activity_id;
          this.service.verifyUserVoting(this.toCheck.value).subscribe(
            (res1:any)=>{
              this.list = this.list.filter((activity:any)=>activity.activity_id != JSON.parse(res1).activity_id)
            }
          )
        }
      }
    );
    //console.log(this.toCheckList)
  }

  incNumber(){
    this.clicking = this.clicking+0.2;
  }

  selectActivity(data:any){
    localStorage.setItem('_deidofact_current',data)
  }
}
