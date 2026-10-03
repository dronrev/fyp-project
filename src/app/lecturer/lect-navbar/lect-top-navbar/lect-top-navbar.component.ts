import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lect-top-navbar',
  templateUrl: './lect-top-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-top-navbar.component.css']
})
export class LectTopNavbarComponent implements OnInit {

  constructor() { }
  username = localStorage.getItem('name');
  check : boolean = false
  ngOnInit(): void {
    if(localStorage.getItem('_sepesial_elor_rof_') != "TDA"){
      this.check = true;
    }
  }

}
