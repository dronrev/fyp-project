import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventsService } from 'src/app/student/event/events.service';
import { Event } from 'src/app/student/event/event.model';

@Component({
  standalone: false,
  selector: 'app-lectdash',
  templateUrl: './lectdash.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lectdash.component.css']
})
export class LectdashComponent implements OnInit {
  myEvent: Event[] = [];

  today = new Date();

  currentEvent:any;
  constructor(private service : EventsService) { }

  ngOnInit(): void {
    this.comingEvent();
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
