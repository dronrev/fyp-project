import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
