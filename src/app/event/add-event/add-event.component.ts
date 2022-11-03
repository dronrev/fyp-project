import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event.model';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  //data: any;

  data:Event[] = [];
  Event: any;

  constructor(private eventService:EventsService) { }

  ngOnInit(): void {
  }

  eventForm = new FormGroup({
    name_activity : new FormControl(""),
    location : new FormControl(""),
    tema : new FormControl(""),
    organizer : new FormControl(""),
    date : new FormControl("")
  })


  sendEvent(){
    if(this.eventForm.valid){
      this.eventService.addEvent(this.eventForm.value).subscribe(res=>{
        console.log(res);
      });
      console.log(this.eventForm.value);
    }
    }
}
