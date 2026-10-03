import { APP_NAME } from 'src/app/shared/app-config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lecturer-home',
  templateUrl: './lecturer-home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lecturer-home.component.css']
})
export class LecturerHomeComponent implements OnInit {
  appName = APP_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
