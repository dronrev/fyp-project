import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lect-report',
  templateUrl: './lect-report.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-report.component.css']
})
export class LectReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
