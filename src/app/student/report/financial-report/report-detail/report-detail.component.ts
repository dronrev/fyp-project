import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

  @Output() sendFinancial = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  myData = new FormGroup(
    {
      'peruntukan_hep' : new FormControl(""),
      'yuran_pendapatan' : new FormControl(""),
      'penaja' : new FormControl(""),
      'speaker' : new FormControl(""),
      'tempat_pertama' : new FormControl(""),
      'tempat_kedua' : new FormControl(""),
      'tempat_ketiga' : new FormControl(""),
    }
  )

  financialData(data : any){
    this.sendFinancial.emit(data);
  }

}
