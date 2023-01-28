import { Component, OnInit } from '@angular/core';
import { EditreportService } from '../report/editreport/editreport.service';
import { Report } from '../report/report.model';
import { ReportsService } from '../report/reports.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor(private service : ReportsService, private service1 : EditreportService) { }

  list:any;

  count : any;

  report: Report[] = [];


  myData= new Array();
  ngOnInit(): void {
    this.service.displayAll().subscribe(
      res=>{
        console.log(res);
        this.list = res;
      }
    );

    this.service1.getAllParticipants().subscribe(
      res=>{
        this.myData.length = this.list.length;
        this.count = res;
        console.log(this.count[0].report_id)
      }
    )



    //console.log(this.list);
  }

}
