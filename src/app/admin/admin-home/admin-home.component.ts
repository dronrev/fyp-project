import { APP_NAME } from 'src/app/shared/app-config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  appName = APP_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
