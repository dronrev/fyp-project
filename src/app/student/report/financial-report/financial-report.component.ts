import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.css']
})
export class FinancialReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(data : any){
    console.log(data);
  }

  financialReport(data : any){
    console.log(data)
  }

}