import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EditreportService } from '../editreport.service';
import * as XLSX from 'xlsx';

export interface DeleteReport{
  matric_no : string,
  report_id : string
}

@Component({
  standalone: false,
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  constructor(private http:HttpClient, private service:EditreportService,private route:Router, private alertcontroller : AlertController) { }

  importParticipants!: any;

  data = new UntypedFormGroup(
    {
      'report_id' : new UntypedFormControl(localStorage.getItem('GetreportID'))
    }
  )

  addStudent = new UntypedFormGroup(
    {
      report_id : new UntypedFormControl(localStorage.getItem('GetreportID')),
      name : new UntypedFormControl("",Validators.required),
      matric_no: new UntypedFormControl("",Validators.required)
    }
  )

  addFromImport = new UntypedFormGroup({
    report_id : new UntypedFormControl(localStorage.getItem('GetreportID')),
    name : new UntypedFormControl("",Validators.required),
    matric_no: new UntypedFormControl("",Validators.required)
  })

  genCert = new UntypedFormGroup({
    report_id : new UntypedFormControl(localStorage.getItem('ReportID')),
    name : new UntypedFormControl("",Validators.required),
    matric_no : new UntypedFormControl("",Validators.required),
    title : new UntypedFormControl(null)
  })

  list:any;

  ngOnInit(): void {
    this.service.getParticipants(this.data.value).
    subscribe(res=>{
      this.list = JSON.parse(res);

    })
  }

  add(){
      this.service.addParticipant(this.addStudent.value).subscribe(
        res=>{
          this.genCert.reset();
          location.reload();
        }
      )

  }

  link:any;

  getCerti(name:any,matric:any){
    this.genCert.value['name'] = name;
    this.genCert.value['matric_no'] = matric;
    this.http.post(`${environment.apiUrl}/e-cert/e-certificate.php`,this.genCert.value,{responseType : 'text'}).subscribe(
      res=>{
        //this.link = `${environment.apiUrl}/e-cert/e-certificate.php`;
      }
    )
  }

createAll(){
  let key = this.list.length;

  for(var i = 0 ; i < key ; i++){
    this.getCerti(this.list[i].name,this.list[i].matric_no);
  }
}

fileName = this.genCert.value['title']

download(){
  this.http.post(`${environment.apiUrl}/e-cert/new-download.php`,this.genCert.value, { responseType: 'blob' })
  .subscribe(data => {
    const blob = new Blob([data], { type: 'application/zip' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = this.genCert.value['title']+'.zip';
    link.click();
    });
}

async createFile(){
  const alert = await this.alertcontroller.create({
    header : "File Name",
    inputs : [
      {
        name : 'Filename',
        placeholder : 'File Name'
      }
    ],
    buttons : [
      {
        text : 'Confirm',
        role : 'enter',
        handler :myData=>{
          this.genCert.value['title'] = myData.Filename;
          this.createAll();
          //location.reload();
        }
      },
      {
        text : 'Cancel',
        role : 'cancel'
      }
    ]
  });
  alert.present();

}

deleting(data:any){
  //this.service.deleteParticipant()
  let value1 : DeleteReport = {matric_no : data, report_id : this.addStudent.value['report_id']};
  this.service.deleteParticipant(value1).subscribe(
    res=>{
      location.reload();
    }
  )
}

importCSV(event:any){
  const myFile = event.target.files[0];
  const fileReader = new FileReader();

  fileReader.readAsBinaryString(myFile);
  fileReader.onload = (event) =>{
    let binaryData = event.target?.result;
    let workbook = XLSX.read(binaryData,{type : 'binary'});
    workbook.SheetNames.forEach(sheet =>{
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
      //console.log(data);
      this.importParticipants = data;
      //console.log(this.importParticipants[0].Fullname);
      let i = 0;
      do{
        i++;
        this.addFromImport.value['name'] = this.importParticipants[i]['Fullname'];
        this.addFromImport.value['matric_no']=this.importParticipants[i]['Matric Number'];
        this.service.addParticipant(this.addFromImport.value).subscribe(
          res=>{
            //this.genCert.reset();
            //location.reload();
          }
        )

      }
      while(i<this.importParticipants.length);
    })
    //console.log(workbook);
  }
}
}
