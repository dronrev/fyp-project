import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EditreportService } from '../editreport.service';

export interface DeleteReport{
  matric_no : string,
  report_id : string
}

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  constructor(private http:HttpClient, private service:EditreportService,private route:Router, private alertcontroller : AlertController) { }

  data = new FormGroup(
    {
      'report_id' : new FormControl(localStorage.getItem('reportID'))
    }
  )

  addStudent = new FormGroup(
    {
      report_id : new FormControl(localStorage.getItem('reportID')),
      name : new FormControl("",Validators.required),
      matric_no: new FormControl("",Validators.required)
    }
  )


  genCert = new FormGroup({
    name : new FormControl("",Validators.required),
    matric_no : new FormControl("",Validators.required),
    title : new FormControl(null)
  })

  list:any;

  ngOnInit(): void {
    this.service.getParticipants(this.data.value).
    subscribe(res=>{
      console.log(res);
      console.log(this.data.value['report_id'])
      this.list = JSON.parse(res);

    })
  }

  add(){
      this.service.addParticipant(this.addStudent.value).subscribe(
        res=>{
          console.log(res);
          this.genCert.reset();
          location.reload();
        }
      )

  }

  link:any;

  getCerti(name:any,matric:any){
    this.genCert.value['name'] = name;
    this.genCert.value['matric_no'] = matric;
    this.http.post("http://localhost/fyp-project/e-cert/e-certificate.php",this.genCert.value,{responseType : 'text'}).subscribe(
      res=>{
        console.log(res);
        //this.link = "http://localhost/fyp-project/e-cert/e-certificate.php";
      }
    )
  }

createAll(){

  let key = this.list.length;

  for(var i = 0 ; i < key ; i++){
    console.log(this.list[i].name);
    this.getCerti(this.list[i].name,this.list[i].matric_no);
  }
}

async createFile(){
  const alert = await this.alertcontroller.create({
    header : "Make Directory",
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
          console.log(myData.Filename);
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
  console.log(value1);
  this.service.deleteParticipant(value1).subscribe(
    res=>{
      console.log(res);
      location.reload();
    }
  )
}
}
