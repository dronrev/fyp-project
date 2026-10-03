import { ROLE } from 'src/app/shared/app-config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReportsService } from 'src/app/student/report/reports.service';

@Component({
  standalone: false,
  selector: 'app-activity-summary-dashboard',
  templateUrl: './activity-summary-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./activity-summary-dashboard.component.css']
})
export class ActivitySummaryDashboardComponent implements OnInit {

  constructor(private service : ReportsService) { }
  list : any;
  check : boolean = false
  ngOnInit(): void {
    if(localStorage.getItem('role') != ROLE.approver){
      this.check = true;
    }
    this.service.displayAll().subscribe(
      res=>{
        this.list = res;
      }
    )
  }

}
