import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, mdTransitionAnimation } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { EventsService } from '../../event/events.service';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  list:any;
  existReport:any = [];
  lecturer:any;
  notCreatedReport:any= [];
  mylist:any = [];

  constructor(private service:ReportsService,private serviceE : EventsService, private alertcontrol : AlertController) { }
  exform!: FormGroup;
  ngOnInit(): void {
    this.exform = new FormGroup({
      'activity_id' : new FormControl(),
      'matric_id': new FormControl(localStorage.getItem('id')),
      'value' : new FormControl(null)
    });

    this.service.getLecturer().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.role != "TDA"))).subscribe(
      res=>{
        this.lecturer = res;
      }
    )

    this.serviceE.displayEvent()
    .subscribe(
      (res:any)=>{
        this.list = res;
        this.mylist = res;
        console.log(this.mylist)
      }
    )
    this.service.displayAll().subscribe(
      (res:any)=>{
        this.existReport = res;
        for(let item of res){
          this.mylist = this.mylist.filter((data:any)=>data.activity_id != item.activity_id)
        }
      }
    )
  }
  checking():void{
    console.log(this.exform.value);
  }

  alertMessage : any;




  addReport(data:any){
    this.exform.value['activity_id'] = data;
    console.log(this.exform.value);
    this.service.createReport(this.exform.value).subscribe(
      res=>{
        console.log(res);
        this.notify(JSON.parse(res).message);
      }
    )
  }
  async notify(data:any){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : data,
      buttons : [{text:'Continue',handler:()=>{location.reload()}}]
    });
    await messages.present();
  }

  async addLecturer(){
    const alert = await this.alertcontrol.create({

    })
  }
}
