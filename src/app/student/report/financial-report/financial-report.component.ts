import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.css']
})
export class FinancialReportComponent implements OnInit {

  report_id = localStorage.getItem('GetreportID')
  message :any;
  constructor(private service : ReportsService,private alertcontrol : AlertController) { }
  myData = new FormGroup(
    {
      'report_id' : new FormControl(localStorage.getItem('ReportID')),
      'nama_aktiviti' : new FormControl(""),
      'penganjur' : new FormControl(""),
      'pengarah' : new FormControl(""),
      'pegawai_bertanggungjawab' : new FormControl(""),
      'bajet_diluluskan' : new FormControl(""),
      'penama_kelulusan' : new FormControl(""),
      'kelulusan_oleh' : new FormControl(""),
      'jumlah_cek' : new FormControl(""),
      'penerima_cek_tunai' : new FormControl("")
    }
  )
  ngOnInit(): void {
  }

  test(data : any){
    console.log(data);
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
    console.log(data)
    this.service.sendLaporanKewangan(data).subscribe(
      res=>{
        console.log(res);
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
