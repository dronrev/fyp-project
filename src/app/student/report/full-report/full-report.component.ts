import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-full-report',
  templateUrl: './full-report.component.html',
  styleUrls: ['./full-report.component.css']
})
export class FullReportComponent implements OnInit {
  list: any;

  TabHeaders = ["#","Name","Status"];

  constructor(private service : ReportsService) { }

  ngOnInit(): void {
    this.service.displayAll().subscribe(
      res=>{
        console.log(res);
        this.list = res;
      }
    );
  }

}
