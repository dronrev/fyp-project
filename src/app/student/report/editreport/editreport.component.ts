import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Report } from '../report.model';
import { ReportsService } from '../reports.service';
import { EditreportService } from './editreport.service';

export interface Detail{
  location?:string;
  taiputong?:string;
}

@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  styleUrls: ['./editreport.component.css']
})
export class EditreportComponent implements OnInit {
  //@Input() childMessage!: string;
  bro!: Detail;
  report_id?:string;
  title?: string;
  organizer?: string;
  location?: string;
  objective?: string;
  introduction?: string;
  involvement?: string;
  perkara_hendak_maklum?: string;
  jemputan_vip?: string;
  impak_program?:string;
  pencapaian?:string;
  rumusan?:string;
  cadangan?:string;
  budget_id?:string;
  activity_id?:string;
  user_id?: string;
  lecturer_id?: string;
  edit = false;
  constructor(private service:ReportsService, private alertController : AlertController,
     private idService : EditreportService) { }
  reports!: Report[];
  //id = JSON.parse();
  thereport = new FormGroup({
    'report_id': new FormControl(localStorage.getItem('GetreportID')),
    'title': new FormControl(""),
    'objective': new FormControl(""),
    'introduction': new FormControl(""),
    'involvement': new FormControl(""),
    'perkara': new FormControl(""),
    'vip': new FormControl(""),
    'impak': new FormControl(""),
    'pencapaian': new FormControl(""),
    'rumusan': new FormControl(""),
    'cadangan': new FormControl("")
  });

  ngOnInit(): void {
    console.log(localStorage.getItem('ReportID'));
    console.log(this.thereport.value)
    this.service.getDetail(this.thereport.value['report_id']).subscribe(
      response=>{
        console.log(response);
        this.reports = JSON.parse(response);
        //this.report_id=this.reports[0].report_id;
        this.title=this.reports[0].title;
        this.organizer=this.reports[0].organizer;
        this.location=this.reports[0].location;
        this.objective=this.reports[0].objective;
        this.introduction=this.reports[0].introduction;
        this.involvement=this.reports[0].involvement;
        this.perkara_hendak_maklum=this.reports[0].perkara_hendak_maklum;
        this.jemputan_vip=this.reports[0].jemputan_vip;
        this.impak_program=this.reports[0].impak_program;
        this.pencapaian=this.reports[0].pencapaian;
        this.rumusan=this.reports[0].rumusan;
        this.cadangan=this.reports[0].cadangan;

        //maintain detail
        this.thereport.value['objective'] = this.reports[0].objective;
        this.thereport.value['introduction'] = this.reports[0].introduction;
        this.thereport.value['involvement'] = this.reports[0].involvement;
        this.thereport.value['perkara'] = this.reports[0].perkara_hendak_maklum;
        this.thereport.value['vip'] = this.reports[0].jemputan_vip;
        this.thereport.value['impak'] = this.reports[0].impak_program;
        this.thereport.value['pencapaian'] = this.reports[0].pencapaian;
        this.thereport.value['rumusan'] = this.reports[0].rumusan;
        this.thereport.value['cadangan'] = this.reports[0].cadangan;
       // budget_id=this.reports[0].report_id;
       // activity_id=this.reports[0].report_id;
        //user_id=this.reports[0].report_id;
        //lecturer_id=this.reports[0].report_id;
      }
    )
  }
  checking():void{
    console.log(this.thereport.value)
  }


  //edit report
  async editButton(){
    let count = 0;
    //this.edit = true;
    if(!this.edit){
      const alert = await this.alertController.create({
        header : "Do you want to update your report?",
        buttons:[
          {
            text : 'Edit',
            role : 'edit',
            handler: ()=>{
              this.edit = true;
            }
          },
          {
            text : 'Cancel',
            role : 'cancel',
            handler: ()=>{
              this.edit = false;
            }
          }
        ]
      });
      await alert.present();
    }
    else{
      const alert = await this.alertController.create({
        header : "Stop Updating?",
        buttons:[
          {
            text : 'Yes',
            role : 'edit',
            handler: ()=>{
              this.edit = false;
            }
          },
          {
            text : 'Cancel',
            role : 'cancel',
            handler: ()=>{
              this.edit = true;
            }
          }
        ]
      });
      await alert.present();
    }
  }

  //send report changes
  saveReport(){
    console.log(this.thereport.value);
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.service.sendReport(this.thereport.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

  sendToLecturer(data: { reportId?: any, myStatus?: any }){
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.thereport.value['status'] = 1;
    data.reportId = "woi";
    console.log(data);
    console.log(this.thereport.value['status']);
    this.service.approveReport(this.thereport.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

  clearForm(){
    this.thereport.reset();
  }
}
