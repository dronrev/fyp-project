import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
