import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
