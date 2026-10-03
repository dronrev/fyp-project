import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../../reports.service';


@Component({
  standalone: false,
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
  myData = new UntypedFormGroup(
    {
      'report_id' : new UntypedFormControl(localStorage.getItem('ReportID')),
      'peruntukan_hep' : new UntypedFormControl("",Validators.required),
      'yuran_pendapatan' : new UntypedFormControl("",Validators.required),
      'penaja' : new UntypedFormControl("",Validators.required),
      'speaker' : new UntypedFormControl("",Validators.required),
      'tempat_pertama' : new UntypedFormControl("",Validators.required),
      'tempat_kedua' : new UntypedFormControl("",Validators.required),
      'tempat_ketiga' : new UntypedFormControl("",Validators.required),
    }
  )
  ngOnInit(): void {
    this.service.specificLaporanKewangan(localStorage.getItem('ReportID')).subscribe(
      res=>{
        this.list = JSON.parse(res)

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
      }
    )
  }

}
