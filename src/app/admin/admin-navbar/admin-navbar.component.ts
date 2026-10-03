import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  lecturer = false;
  student = false;

  constructor() { }

  ngOnInit(): void {
  }
  onLecturer(){
    this.lecturer = true;
    this.student = false;
  }
}
