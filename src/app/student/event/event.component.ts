import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Event } from './event.model';
import { ReportsService } from '../report/reports.service';
import { EventsService } from './events.service';
@Component({
  standalone: false,
  selector: 'app-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
        this.activities = data;
        //this.mydate = new Date(this.activities['date']);
      }
    )
  }

}
