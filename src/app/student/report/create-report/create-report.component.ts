import { ROLE } from 'src/app/shared/app-config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';
import { map } from 'rxjs/operators';
import { EventsService } from '../../event/events.service';
import { ReportsService } from '../reports.service';

@Component({
  standalone: false,
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  list:any;
  existReport:any = [];
  lecturer:any;
  notCreatedReport:any= [];
  mylist:any = [];

  constructor(private service:ReportsService,private serviceE : EventsService, private alertcontrol : AlertService) { }
  exform!: UntypedFormGroup;
  ngOnInit(): void {
    this.exform = new UntypedFormGroup({
      'activity_id' : new UntypedFormControl(),
      'matric_id': new UntypedFormControl(localStorage.getItem('id')),
      'value' : new UntypedFormControl(null)
    });

    this.service.getReviewers().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.role != ROLE.approver))).subscribe(
      res=>{
        this.lecturer = res;
      }
    )

    this.serviceE.displayEvent()
    .subscribe(
      (res:any)=>{
        this.list = res;
        this.mylist = res;
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
  }

  alertMessage : any;




  addReport(data:any){
    this.exform.value['activity_id'] = data;
    this.service.createReport(this.exform.value).subscribe(
      res=>{
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
