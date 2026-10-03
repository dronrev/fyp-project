import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Report } from '../report/report.model';

@Component({
  standalone: false,
  selector: 'app-report',
  templateUrl: './report.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

}
