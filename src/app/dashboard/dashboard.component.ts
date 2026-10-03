import { APP_NAME } from 'src/app/shared/app-config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventsService } from '../student/event/events.service';
import { Event } from '../student/event/event.model';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appName = APP_NAME;

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
        this.myEvent = res;
      }
    );
  }

}
