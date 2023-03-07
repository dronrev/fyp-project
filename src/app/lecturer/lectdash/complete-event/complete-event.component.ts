import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/student/event/events.service';

@Component({
  selector: 'app-complete-event',
  templateUrl: './complete-event.component.html',
  styleUrls: ['./complete-event.component.css']
})
export class CompleteEventComponent implements OnInit {

  constructor(private service : EventsService) { }
  list :any;
  check : boolean = false
  ngOnInit(): void {
    if(localStorage.getItem('_sepesial_elor_rof_') != "TDA"){
      this.check = true;
    }
    this.service.completeEvent().subscribe(
      res=>{
        console.log(res)
        this.list = res;
      }
    )
  }

}
