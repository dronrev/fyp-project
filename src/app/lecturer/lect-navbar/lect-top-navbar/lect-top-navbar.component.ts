import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lect-top-navbar',
  templateUrl: './lect-top-navbar.component.html',
  styleUrls: ['./lect-top-navbar.component.css']
})
export class LectTopNavbarComponent implements OnInit {

  constructor() { }
  username = localStorage.getItem('name');
  ngOnInit(): void {
  }

}
