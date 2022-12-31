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

        let a = this.count.length;
        let b = this.list.length;

        //to count number of participants
        for(let i = 0; i<a; i++)
          for(let j = 0; j<b; j++){
            if(this.count[i].report_id == this.list[j].report_id){
              this.myData[j]++;
            }
          }
        //console.log(this.list['report_id'])
        console.log(this.myData);
        console.log(res);
      }
    )

    //console.log(this.list);
  }

}
