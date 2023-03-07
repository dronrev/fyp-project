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
    this.toCheckReportExist()
    //console.log(this.existReport)
    this.exform = new FormGroup({
      //'title' : new FormControl(null, Validators.required),
      //'organizer' : new FormControl(null, Validators.required),
      //'location' : new FormControl(null, Validators.required),
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
        //console.log(res)
        this.list = res;
        this.mylist = res;

        //check if the event has report already
        for(let i = 0 ; i < this.mylist.length ; i++){
          let check;
          for(let item in this.existReport){
            check = this.mylist[i].activity_id.includes(item)
            if(check){
              console.log(check)
              this.mylist.splice(i,1)
              break;
            }
          }
        }

        console.log(this.mylist)
      }
    )
  }
  checking():void{
    console.log(this.exform.value);
    //console.log(localStorage.getItem('id'));
  }

  alertMessage : any;

  async createReport(){
    //console.log(this.exform.value);
    this.service.newReport(this.exform.value).subscribe(async res=>{
      this.alertMessage = JSON.parse(res);
      const alert = await this.alertcontrol.create({
        header: 'Report Update',
        message : this.alertMessage.message,
        buttons : ['OK']
      });

      await alert.present();
    })
  }


  addReport(data:any){
    this.exform.value['activity_id'] = data;
    console.log(this.exform.value);
    this.service.createReport(this.exform.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

  async addLecturer(){
    const alert = await this.alertcontrol.create({

    })
  }

  toCheckReportExist(){
    this.service.displayAll().subscribe(
      (res:any)=>{
        //this.existReport = res;
        //console.log(this.existReport)
        for(let item of res){
          //console.log(item.activity_id)
          //item.activity_id = this.existReport;
          this.existReport.push(item.activity_id)
        }
      }
    )
    //console.log(this.existReport)
  }
}
