import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FinancialForm } from 'src/app/student/report/financial-report/financial-form/financial-form.mode';
import { ReportsService } from 'src/app/student/report/reports.service';

@Component({
  selector: 'app-lect-financial-report',
  templateUrl: './lect-financial-report.component.html',
  styleUrls: ['./lect-financial-report.component.css']
})
export class LectFinancialReportComponent implements OnInit {

  constructor(private service : ReportsService) { }
  name_activity?: string;
  pengarah?:string;
  penganjur?:string;
  pegawai_bertanggungjawab ?:string;
  bajet_diluluskan ?: string;
  penama_kelulusan ?:string;
  kelulusan_oleh ?: string;
  jumlah_cek ?: string;
  penerima_cek_tunai ?:string;
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
  form1_data !: FinancialForm[]
  ngOnInit(): void {
    this.service.getPendahuluan(this.myData.value).subscribe(
      res=>{
        //console.log(JSON.parse(res))
        this.form1_data = JSON.parse(res);

        //bind exist data from database
        this.name_activity = this.form1_data[0].name_activity;
        this.penganjur = this.form1_data[0].penganjur;
        this.pengarah = this.form1_data[0].pengarah;
        this.pegawai_bertanggungjawab = this.form1_data[0].pegawai_bertanggungjawab;
        this.bajet_diluluskan = this.form1_data[0].bajet_diluluskan;
        this.penama_kelulusan = this.form1_data[0].penama_kelulusan;
        this.kelulusan_oleh = this.form1_data[0].kelulusan_oleh;
        this.jumlah_cek = this.form1_data[0].jumlah_cek;
        this.penerima_cek_tunai = this.form1_data[0].penerima_cek;

        //maintain the data
        this.myData.value.nama_aktiviti = this.form1_data[0].name_activity;
        this.myData.value.penganjur = this.form1_data[0].penganjur;
        this.myData.value.pengarah = this.form1_data[0].pengarah;
        this.myData.value.pegawai_bertanggungjawab = this.form1_data[0].pegawai_bertanggungjawab;
        this.myData.value.bajet_diluluskan = this.form1_data[0].bajet_diluluskan;
        this.myData.value.penama_kelulusan = this.form1_data[0].penama_kelulusan;
        this.myData.value.kelulusan_oleh = this.form1_data[0].kelulusan_oleh;
        this.myData.value.jumlah_cek = this.form1_data[0].jumlah_cek;
        this.myData.value.penerima_cek_tunai = this.form1_data[0].penerima_cek
      }
    )
  }

}
