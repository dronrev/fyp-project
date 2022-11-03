import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReportsService } from 'src/app/report/reports.service';
import { Event } from '../event.model'
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  //@Input() event:Event | undefined;

  activities: Event[] = [];
  //test!: string;
  constructor(private activity : ReportsService) { }

  ngOnInit(): void {
    //this.activity.displayReport().subscribe(
    //  (data:any)=>{
    //    console.log(data);
     //   this.activities = data;
   //     //this.test = JSON.parse(results.data);
   //   }
   // )
  }

}
