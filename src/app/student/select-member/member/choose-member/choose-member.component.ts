import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/admin/users.service';
import { EventsService } from 'src/app/student/event/events.service';

@Component({
  selector: 'app-choose-member',
  templateUrl: './choose-member.component.html',
  styleUrls: ['./choose-member.component.css']
})
export class ChooseMemberComponent implements OnInit {

  constructor(private studentservice : UsersService,private service : EventsService,private fb : FormBuilder,
    private alertcontrol : AlertController) { }

  data_sent = this.fb.group({
      vote : this.fb.array([]),
      activity_id : this.fb.control({value : localStorage.getItem('_deidofact_current')})
    }
  )


  list_student :any;
  imageURL = '../assets/images/profile-picture/'
  list : any;
  ngOnInit(): void {

    this.service.displayEvent().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.activity_id == localStorage.getItem('_deidofact_current')))).subscribe(
      res=>{
        this.list = res;
        console.log(res);
        //console.log(this.list[0].cawangan)
      }
    );

    //.list_student.filter((data:any)=>data.cawangan == this.list.cawangan);


    this.studentservice.fetchStudent().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.cawangan == this.list[0].cawangan && myData.user_id != this.list[0].pengarah
    ))).subscribe(
      res=>{
        console.log(res);
        this.list_student = res;
      }
    );


  }


  check: boolean = false;


  sendData(event:any,data:any){
    this.check = true;
    let info = {name : data.username,user_id : data.user_id, activity_id : localStorage.getItem('_deidofact_current')};
    //console.log(event.detail.checked);
    if(event.detail.checked){
      this.data_sent.value['vote'].push(info);
    }
    else{
      this.check = false;
      //this.myList.pop();
      for(let i  = 0 ; i<this.data_sent.value['vote'].length;i++){
        if(data.user_id == this.data_sent.value['vote'][i].user_id){
          this.data_sent.value['vote'].splice(i,1);
          break;
        }
      }
    }
  }

  sending_to_db(){
    if(this.data_sent.value.vote.length != 5){
      this.overVote()
    }else{
      for (let index = 0; index < this.data_sent.value['vote'].length; index++) {
        this.service.sendvote(this.data_sent.value['vote'][index]).subscribe(
          (res:any)=>{
            console.log(res)

          }
        )
      }

      let pass = {activity_id : localStorage.getItem('_deidofact_current'), matric_id : localStorage.getItem('id')};
      console.log(pass)
      this.service.AlreadyVote(pass).subscribe(
        (res:any)=>{
          console.log(res)
          this.passVote()
        }
      )
    }
  }


  countVote(){
    //this.activity_id = localStorage.getItem('_deidofact_current')
    //console.log(this.data_sent.value['activity_id'])
    this.service.voteCount(this.data_sent.value['activity_id']).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

  async overVote(){
    const alert = await this.alertcontrol.create({
      header : 'Error',
      message: 'Please select 5 candidates!',
      buttons : ['Continue']
    })
    await alert.present();
  }
  async passVote(){
    const alert = await this.alertcontrol.create({
      header : 'Success',
      message: 'Your vote has been submitted!',
      buttons : ['Continue']
    })
    await alert.present();
  }
}
