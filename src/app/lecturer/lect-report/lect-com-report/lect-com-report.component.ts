import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs';
import { EditreportService } from 'src/app/student/report/editreport/editreport.service';
import { Report } from 'src/app/student/report/report.model';
import { ReportsService } from 'src/app/student/report/reports.service';



@Component({
  selector: 'app-lect-com-report',
  templateUrl: './lect-com-report.component.html',
  styleUrls: ['./lect-com-report.component.css']
})
export class LectComReportComponent implements OnInit {
  reports!: Report[];
  allReport! :Report[];
  constructor(private reportService : ReportsService,private idService : EditreportService) { }
  fetchReport = new FormGroup({
    id : new FormControl(localStorage.getItem('id')),
    auth : new FormControl(localStorage.getItem('auth'))
  })
  ngOnInit(): void {
    if(localStorage.getItem('_sepesial_elor_rof_') == 'TDA'){
      console.log("test");
      this.reportService.displayAll().pipe(map((data:any)=>data.filter((ok:any) => ok.status == "3"))).subscribe(
        (res:any)=>{
          //console.log(res);
          this.allReport = res;
          console.log(this.allReport);
        }
      )
    }
    if(localStorage.getItem('_sepesial_elor_rof_') == 'lecturer'){
      console.log(this.fetchReport.value);
      //
      this.reportService.displayReport(this.fetchReport.value)
      .subscribe(
        (results:any)=>{
          console.log(JSON.parse(results).filter((ok:any)=>ok.status == 2));

          this.reports = JSON.parse(results).filter((ok:any)=>ok.status == 2);
          localStorage.removeItem('reportID');
        }
      );
    }
    //const data = ""
  }
  getReport(key:any){
    if(localStorage.getItem('_sepesial_elor_rof_') == 'TDA')
    {
      console.log('yello');
      var report_data = JSON.stringify(this.allReport[key].report_id);
      this.idService.setCurrentReport(this.allReport[key].report_id);
      localStorage.setItem("reportID",report_data);
      localStorage.setItem("ReportID",this.idService.getCurrentReport());
    }
    else{
      var report_data = JSON.stringify(this.reports[key].report_id);
      if(this.reports[key].report_id == undefined){
        console.log("notFound");
      }
      else{
        console.log("Found");
        this.idService.setCurrentReport(this.reports[key].report_id);
        console.log(this.reports[key].report_id);
        localStorage.setItem("reportID",report_data);
        localStorage.setItem("ReportID",this.idService.getCurrentReport());
        //localStorage.setItem('GetreportID')
      }
    }
  }



}
