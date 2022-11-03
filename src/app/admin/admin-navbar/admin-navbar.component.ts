import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
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
