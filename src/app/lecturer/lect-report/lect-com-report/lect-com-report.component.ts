import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Report } from 'src/app/report/report.model';
import { ReportsService } from 'src/app/report/reports.service';

@Component({
  selector: 'app-lect-com-report',
  templateUrl: './lect-com-report.component.html',
  styleUrls: ['./lect-com-report.component.css']
})
export class LectComReportComponent implements OnInit {
  reports!: Report[];
  constructor(private reportService : ReportsService) { }
  fetchReport = new FormGroup({
    id : new FormControl(localStorage.getItem('id')),
    auth : new FormControl(localStorage.getItem('auth'))
  })
  ngOnInit(): void {
    console.log(this.fetchReport.value);
    const data = "";
    this.reportService.displayReport(this.fetchReport.value).subscribe(
      (results:any)=>{
        console.log(results);
        this.reports = JSON.parse(results);
        localStorage.removeItem('reportID');
      }
    );
  }
  getReport(key:any){
    var report_data = JSON.stringify(this.reports[key].report_id);
    if(this.reports[key].report_id == undefined){
      console.log("notFound");
    }
    else{
      console.log("Found");
      console.log(this.reports[key].report_id);
      localStorage.setItem("reportID",report_data);
    }

  }

}
