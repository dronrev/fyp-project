import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lect-event',
  templateUrl: './lect-event.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-event.component.css']
})
export class LectEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
