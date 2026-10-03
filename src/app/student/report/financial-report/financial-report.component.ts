import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ReportsService } from '../reports.service';

@Component({
  standalone: false,
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./financial-report.component.css']
})
export class FinancialReportComponent implements OnInit {

  report_id = localStorage.getItem('GetreportID')
  message :any;
  constructor(private service : ReportsService,private alertcontrol : AlertController) { }
  myData = new UntypedFormGroup(
    {
      'report_id' : new UntypedFormControl(localStorage.getItem('ReportID')),
      'nama_aktiviti' : new UntypedFormControl(""),
      'penganjur' : new UntypedFormControl(""),
      'pengarah' : new UntypedFormControl(""),
      'pegawai_bertanggungjawab' : new UntypedFormControl(""),
      'bajet_diluluskan' : new UntypedFormControl(""),
      'penama_kelulusan' : new UntypedFormControl(""),
      'kelulusan_oleh' : new UntypedFormControl(""),
      'jumlah_cek' : new UntypedFormControl(""),
      'penerima_cek_tunai' : new UntypedFormControl("")
    }
  )
  ngOnInit(): void {
  }

  test(data : any){
    this.service.sendPendahuluan(data).subscribe(
      res=>{
        //console.log()
        //JSON.parse(res).message
        this.sendPendahuluan(JSON.parse(res).message)
      }
    )
    //this.myData.value['nama_aktivity'] = data.nama_aktiviti
    //console.log(this.myData.value)
  }

  financialReport(data : any){
    this.service.sendLaporanKewangan(data).subscribe(
      res=>{
        this.sendPendahuluan(JSON.parse(res).message)
      }
    )
  }

  async sendPendahuluan(data : any){
    const alert = await this.alertcontrol.create({
      header : 'Data insert',
      message : data,
      buttons : ['Continue']
    })
    await alert.present();
  }
}
