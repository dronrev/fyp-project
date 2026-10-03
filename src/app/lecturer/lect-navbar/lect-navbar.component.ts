import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lect-navbar',
  templateUrl: './lect-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-navbar.component.css']
})
export class LectNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
