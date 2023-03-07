import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, from, map, tap } from 'rxjs';
import { Event } from '../../event/event.model';
import { EventsService } from '../../event/events.service';

@Component({
  selector: 'app-upcoming-activity',
  templateUrl: './upcoming-activity.component.html',
  styleUrls: ['./upcoming-activity.component.css']
})
export class UpcomingActivityComponent implements OnInit {

  constructor(private service : EventsService) {
   }

  myEvent: Event[] = [];

  today = new Date();

  ngOnInit(): void {
    this.comingEvent();
    //this.currentEvent = this.comingEvent().pipe(filter(res => res.activity_id == 1));
    console.log(this.today.toISOString().split('T')[0])
  }

  comingEvent(){
    this.service.displayEvent().pipe(map((data:any)=>data.filter((ok:any) => ok.date >= this.today.toISOString().split('T')[0] )))
      .subscribe(
      (res:any)=>{
        console.log(res);
        this.myEvent = res;
      }
    );
    //console.log(this.myEvent);
    //return from(this.myEvent);
    /*
    .pipe(map((res:any) => console.log(res)))
*/
  }

}
