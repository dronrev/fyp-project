import { ROLE } from 'src/app/shared/app-config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EventsService } from 'src/app/student/event/events.service';

@Component({
  standalone: false,
  selector: 'app-complete-event',
  templateUrl: './complete-event.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./complete-event.component.css']
})
export class CompleteEventComponent implements OnInit {

  constructor(private service : EventsService) { }
  list :any;
  check : boolean = false
  ngOnInit(): void {
    if(localStorage.getItem('role') != ROLE.approver){
      this.check = true;
    }
    this.service.completeEvent().subscribe(
      res=>{
        this.list = res;
      }
    )
  }

}
