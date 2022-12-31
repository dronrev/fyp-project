import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonModal } from '@ionic/angular';
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

  constructor(private studentservice : UsersService,private service : EventsService,private fb : FormBuilder) { }

  data_sent = this.fb.group({
    vote : this.fb.array([])
  }
  )

  list_student :any;

  list : any;
  ngOnInit(): void {
    this.studentservice.fetchStudent().subscribe(
      res=>{
        console.log(res);
        this.list_student = res;
      }
    );
    this.service.displayEvent().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.activity_id == localStorage.getItem('_deidofact_current')))).subscribe(
      res=>{
        this.list = res;
        console.log(res);
      }
    );
  }

  getPic(data:any){
    let photo = data.files[0];
    blob : Blob;
    let reader = new FileReader();

    //reader.readAsArrayBuffer();
  }

  check: boolean = false;


  sendData(event:any,data:any){
    this.check = true;
    let info = {name : data.username , status : this.check};
    //console.log(data);
    //console.log(event.detail.checked);
    if(event.detail.checked){
      this.data_sent.value['vote'].push(info);
    }
    else{
      this.check = false;
      //this.myList.pop();
      for(let i  = 0 ; i<this.data_sent.value['vote'].length;i++){
        if(data.username == this.data_sent.value['vote'][i].name){
          this.data_sent.value['vote'].splice(i,1);
          break;
        }
      }
    }
  }

  sending_to_db(){
    console.log(this.data_sent.value);
    this.service.sendvote(this.data_sent.value).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )

  }
}
