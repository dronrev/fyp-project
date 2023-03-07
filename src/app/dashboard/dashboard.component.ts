import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventsService } from '../student/event/events.service';
import { Event } from '../student/event/event.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service : EventsService) { }
  myEvent: Event[] = [];

  today = new Date();
  ngOnInit(): void {
    this.comingEvent()
  }
  comingEvent(){
    this.service.displayEvent().pipe(map((data:any)=>data.filter((ok:any) => ok.date >= this.today.toISOString().split('T')[0] )))
      .subscribe(
      (res:any)=>{
        console.log(res);
        this.myEvent = res;
      }
    );
  }

}
