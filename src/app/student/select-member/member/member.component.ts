import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventsService } from '../../event/events.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UsersService } from 'src/app/admin/users.service';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
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

  toCheck = new FormGroup({
    'activity_id' : new FormControl("a1063b974c30fe7d"),
    'matric_id' : new FormControl(localStorage.getItem('id'))
  })

  ngOnInit(): void {
    this.stuService.fetchStudent().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.user_id == localStorage.getItem('id')))).subscribe(
      (res:any)=>{
        console.log(res);
        localStorage.setItem('_caw_angan_',res[0].cawangan);
      }
    )
    this.service.displayEvent().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.date >= this.today.toISOString().split('T')[0]))).subscribe(
      res=>{
        this.list = res.filter((bahagian:any)=>bahagian.cawangan == localStorage.getItem('_caw_angan_'));
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

  @ViewChild(IonModal) mymodal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name?: string;

  cancel() {
    this.mymodal.dismiss(null, 'cancel');
  }

  confirm() {
    this.mymodal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  selectActivity(data:any){
    console.log(data);
    localStorage.setItem('_deidofact_current',data)
  }
}
