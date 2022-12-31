import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { EditreportService } from '../editreport/editreport.service';
import { Report } from '../report.model';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'report',
  templateUrl: './com-report.component.html',
  styleUrls: ['./com-report.component.css']
})
export class ComReportComponent implements OnInit {
  reports!: Report[];
  //key :any;

  parentMessage = "test";
  fetchReport = new FormGroup({
    id : new FormControl(localStorage.getItem('id')),
    auth : new FormControl(localStorage.getItem('auth'))
  })

  constructor(private reportService : ReportsService,private router:Router, private idService : EditreportService) { }

  ngOnInit(): void {

    console.log(this.fetchReport.value);
    //const data = "";
    this.reportService.displayReport(this.fetchReport.value)
    .subscribe(
      (results:any)=>{
        //console.log(results);
        this.reports = JSON.parse(results);
        localStorage.removeItem('GetreportID');
        localStorage.removeItem('reportID');
      }
    );
    //this.getReport(data);
  }

  getReport(key:any){
    var report_data = JSON.stringify(this.reports[key].report_id);
    if(this.reports[key].report_id == undefined){
      console.log("notFound");
    }
    else{
      console.log("Found");
      console.log(this.reports[key].report_id);
      this.idService.setCurrentReport(this.reports[key].report_id);
      localStorage.setItem("GetreportID",report_data);
      localStorage.setItem("ReportID",this.idService.getCurrentReport());
    }
  }
  deleteRep(key:any){
    console.log(key);
    this.reportService.deleteReport(key).subscribe(
      res=>{
        console.log(res);
      }
    )
  }
}
