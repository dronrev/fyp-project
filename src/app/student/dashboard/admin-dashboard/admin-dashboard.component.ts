import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
