import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  standalone: false,
  selector: 'app-full-report',
  templateUrl: './full-report.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./full-report.component.css']
})
export class FullReportComponent implements OnInit {
  list: any;

  TabHeaders = ["#","Name","Status"];

  constructor(private service : ReportsService) { }

  ngOnInit(): void {
    this.service.displayAll().subscribe(
      res=>{
        this.list = res;
      }
    );
  }

}
