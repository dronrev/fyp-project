import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event.model';
import { UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ReportsService } from '../../report/reports.service';
import { map } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  //data: any;

  data:Event[] = [];
  Event: any;
  lecturer:any;

  constructor(private service:ReportsService,private eventService:EventsService, private alertController : AlertController) { }

  ngOnInit(): void {
    //console.log(localStorage.getItem('id'))
    this.service.getLecturer().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.role != "TDA" && myData.role != "DEKAN"))).subscribe(
      res=>{
        this.lecturer = res;
      }
    )
  }

  eventForm = new UntypedFormGroup({
    name_activity : new UntypedFormControl("",Validators.required),
    location : new UntypedFormControl("",Validators.required),
    tema : new UntypedFormControl("",Validators.required),
    organizer : new UntypedFormControl("",Validators.required),
    date : new UntypedFormControl("",Validators.required),
    pengarah : new UntypedFormControl(localStorage.getItem('id')),
    value : new UntypedFormControl("")
  })


  sendEvent(){
    //this.eventForm.value['date'] = new Date();
    if(this.eventForm.valid){
      this.eventService.addEvent(this.eventForm.value).subscribe(res=>{
        this.successMessage();
        this.eventForm.reset();
      });
    }
    else{
      this.notSuccessMessage()
    }
    //console.log(this.eventForm.value);
  }

  async successMessage(){
    const alert = await this.alertController.create({
      header : 'Success !',
      message : 'Event added successfully!',
      buttons : [
        {
          text : 'Continue',
          handler:()=>{location.reload()}
        }
      ]
    });
    await alert.present();
  }
  async notSuccessMessage(){
    const alert = await this.alertController.create({
      header : 'Failed !',
      message : 'Please fill in all forms!',
      buttons : [
        {
          text : 'Continue'
        }
      ]
    });
    await alert.present();
  }
}
