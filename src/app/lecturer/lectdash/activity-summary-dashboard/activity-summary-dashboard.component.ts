import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/student/report/reports.service';

@Component({
  selector: 'app-activity-summary-dashboard',
  templateUrl: './activity-summary-dashboard.component.html',
  styleUrls: ['./activity-summary-dashboard.component.css']
})
export class ActivitySummaryDashboardComponent implements OnInit {

  constructor(private service : ReportsService) { }
  list : any;
  check : boolean = false
  ngOnInit(): void {
    if(localStorage.getItem('_sepesial_elor_rof_') != "TDA"){
      this.check = true;
    }
    this.service.displayAll().subscribe(
      res=>{
        console.log(res)
        this.list = res;
      }
    )
  }

}
