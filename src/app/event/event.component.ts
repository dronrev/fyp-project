import { Component, Input, OnInit } from '@angular/core';
import { Event } from './event.model';
import { ReportsService } from '../report/reports.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:Event[] = [
    //new Event('Hackthon','DKP-19','Belum Diketahui'),
  ]
  activities: any;
  constructor( private activity : ReportsService){

  }
  ngOnInit(): void {
    //this.activity.displayReport().subscribe(
      //(data:any)=>{
       // this.activities = data.data;
     // }
   // )
  }

}
