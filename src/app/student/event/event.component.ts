import { Component, Input, OnInit } from '@angular/core';
import { Event } from './event.model';
import { ReportsService } from '../report/reports.service';
import { EventsService } from './events.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:Event[] = [
    //ew Event('Hackthon','DKP-19','Belum Diketahui'),
  ]
  activities: any;
  mydate : any;
  constructor(private service : EventsService){

  }
  ngOnInit(): void {
    this.service.displayEvent().subscribe(
      (data:any)=>{
        console.log(data)
        this.activities = data;
        //this.mydate = new Date(this.activities['date']);
      }
    )
  }

}
