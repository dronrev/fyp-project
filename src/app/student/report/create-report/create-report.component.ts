import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
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

  lecturer:any;

  constructor(private service:ReportsService,private serviceE : EventsService, private alertcontrol : AlertController) { }
  exform!: FormGroup;
  ngOnInit(): void {
    this.exform = new FormGroup({
      'title' : new FormControl(null, Validators.required),
      'organizer' : new FormControl(null, Validators.required),
      'location' : new FormControl(null, Validators.required),
      'matric_id': new FormControl(localStorage.getItem('id')),
      'value' : new FormControl(null)
    });

    this.service.getLecturer().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.role != "TDA"))).subscribe(
      res=>{
        console.log(res);
        this.lecturer = res;
      }
    )

    this.serviceE.displayEvent().subscribe(
      res=>{
        console.log(res)
        this.list = res;
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
    console.log(data)
  }


}
