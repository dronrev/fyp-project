import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
