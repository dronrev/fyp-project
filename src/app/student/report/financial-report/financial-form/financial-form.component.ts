import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-financial-form',
  templateUrl: './financial-form.component.html',
  styleUrls: ['./financial-form.component.css']
})
export class FinancialFormComponent implements OnInit {

  constructor() { }

  @Output() send = new EventEmitter<any>();

  name = ["test4","test5","test6"]

  myData = new FormGroup(
    {
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

  SendData(data : any){
    this.send.emit(data);
    //this.send.emit(this.name);
  }

}
