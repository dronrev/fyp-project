import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lect-announcement',
  templateUrl: './lect-announcement.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-announcement.component.css']
})
export class LectAnnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
