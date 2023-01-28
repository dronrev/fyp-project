import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../../reports.service';


@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

  @Output() sendFinancial = new EventEmitter<any>();

  constructor(private service : ReportsService) { }
  list:any;
  peruntukan_hep : any;
  tempat_pertama : any;
  tempat_kedua : any;
  tempat_ketiga : any;
  speaker : any;
  yuran_pendapatan : any;
  penaja : any;
  myData = new FormGroup(
    {
      'report_id' : new FormControl(localStorage.getItem('ReportID')),
      'peruntukan_hep' : new FormControl("",Validators.required),
      'yuran_pendapatan' : new FormControl("",Validators.required),
      'penaja' : new FormControl("",Validators.required),
      'speaker' : new FormControl("",Validators.required),
      'tempat_pertama' : new FormControl("",Validators.required),
      'tempat_kedua' : new FormControl("",Validators.required),
      'tempat_ketiga' : new FormControl("",Validators.required),
    }
  )
  ngOnInit(): void {
    this.service.specificLaporanKewangan(localStorage.getItem('ReportID')).subscribe(
      res=>{
        console.log(res)
        this.list = JSON.parse(res)
        console.log(this.list)

        //show data form database
        this.peruntukan_hep = this.list[0].peruntukan_hep
        this.tempat_pertama = this.list[0].tempat_pertama
        this.tempat_kedua = this.list[0].tempat_kedua
        this.tempat_ketiga = this.list[0].tempat_ketiga
        this.yuran_pendapatan = this.list[0].yuran_pendapatan
        this.speaker = this.list[0].speaker
        this.penaja = this.list[0].penaja

        //maintain data from database
        this.myData.value.peruntukan_hep = this.list[0].peruntukan_hep
        this.myData.value.tempat_pertama = this.list[0].tempat_pertama
        this.myData.value.tempat_kedua = this.list[0].tempat_kedua
        this.myData.value.tempat_ketiga = this.list[0].tempat_ketiga
        this.myData.value.yuran_pendapatan = this.list[0].yuran_pendapatan
        this.myData.value.speaker = this.list[0].speaker
        this.myData.value.penaja = this.list[0].penaja
      }
    )
  }

  financialData(data : any){
    this.sendFinancial.emit(data);
  }

  getCount(){
    this.service.totalCount(this.myData.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}
