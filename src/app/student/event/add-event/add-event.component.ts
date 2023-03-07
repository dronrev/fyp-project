import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ReportsService } from '../../report/reports.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
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
        console.log(res);
        this.lecturer = res;
      }
    )
  }

  eventForm = new FormGroup({
    name_activity : new FormControl("",Validators.required),
    location : new FormControl("",Validators.required),
    tema : new FormControl("",Validators.required),
    organizer : new FormControl("",Validators.required),
    date : new FormControl("",Validators.required),
    pengarah : new FormControl(localStorage.getItem('id'))
  })


  sendEvent(){
    //this.eventForm.value['date'] = new Date();
    if(this.eventForm.valid){
      this.eventService.addEvent(this.eventForm.value).subscribe(res=>{
        console.log(res);
        this.successMessage();
        this.eventForm.reset();
      });
      console.log(this.eventForm.value);
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
          text : 'Continue'
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
