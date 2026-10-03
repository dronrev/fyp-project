import { Component, OnInit, Pipe, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { filter, map } from 'rxjs';
import { EditreportService } from 'src/app/student/report/editreport/editreport.service';
import { Report } from 'src/app/student/report/report.model';
import { ReportsService } from 'src/app/student/report/reports.service';



@Component({
  standalone: false,
  selector: 'app-lect-com-report',
  templateUrl: './lect-com-report.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-com-report.component.css']
})
export class LectComReportComponent implements OnInit {
  reports!: Report[];
  allReport! :Report[];
  constructor(private reportService : ReportsService,private idService : EditreportService) { }
  fetchReport = new UntypedFormGroup({
    id : new UntypedFormControl(localStorage.getItem('id')),
    auth : new UntypedFormControl(localStorage.getItem('auth'))
  })
  ngOnInit(): void {
    if(localStorage.getItem('_sepesial_elor_rof_') == 'TDA'){
      this.reportService.displayAll().pipe(map((data:any)=>data.filter((ok:any) => ok.status == "3"))).subscribe(
        (res:any)=>{
          //console.log(res);
          this.allReport = res;
        }
      )
    }
    if(localStorage.getItem('_sepesial_elor_rof_') == 'lecturer'){
      //
      this.reportService.displayReport(this.fetchReport.value)
      .subscribe(
        (results:any)=>{

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
      var report_data = JSON.stringify(this.allReport[key].report_id);
      this.idService.setCurrentReport(this.allReport[key].report_id);
      localStorage.setItem("reportID",report_data);
      localStorage.setItem("ReportID",this.idService.getCurrentReport());
    }
    else{
      var report_data = JSON.stringify(this.reports[key].report_id);
      if(this.reports[key].report_id == undefined){
      }
      else{
        this.idService.setCurrentReport(this.reports[key].report_id);
        localStorage.setItem("reportID",report_data);
        localStorage.setItem("ReportID",this.idService.getCurrentReport());
        //localStorage.setItem('GetreportID')
      }
    }
  }



}
