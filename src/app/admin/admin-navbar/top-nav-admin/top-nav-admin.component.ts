import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-top-nav-admin',
  templateUrl: './top-nav-admin.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-nav-admin.component.css']
})
export class TopNavAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
