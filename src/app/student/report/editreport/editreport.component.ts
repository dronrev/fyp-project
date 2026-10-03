import { REPORT_STATUS, ROLE } from 'src/app/shared/app-config';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';
import { Report } from '../report.model';
import { ReportsService } from '../reports.service';
import { EditreportService } from './editreport.service';

export interface Detail{
  location?:string;
  taiputong?:string;
}

@Component({
  standalone: false,
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
  reviewer_id?: string;
  comment ?: string;
  edit = false;

  actRep = true;
  finRep = false;
  attacRep = false;
  partRep = false;
  comRep = false;

  isLeader?: boolean;

  constructor(private service:ReportsService, private alertController : AlertService,
     private idService : EditreportService) { }
  reports!: Report[];
  //id = JSON.parse();
  thereport = new UntypedFormGroup({
    'report_id': new UntypedFormControl(localStorage.getItem('GetreportID')),
    'title': new UntypedFormControl("",Validators.required),
    'objective': new UntypedFormControl("",Validators.required),
    'introduction': new UntypedFormControl("",Validators.required),
    'involvement': new UntypedFormControl("",Validators.required),
    'perkara': new UntypedFormControl("",Validators.required),
    'vip': new UntypedFormControl("",Validators.required),
    'impak': new UntypedFormControl("",Validators.required),
    'pencapaian': new UntypedFormControl("",Validators.required),
    'rumusan': new UntypedFormControl("",Validators.required),
    'cadangan': new UntypedFormControl("",Validators.required)
  });

  ngOnInit(): void {
    this.service.getDetail(this.thereport.value['report_id']).subscribe(
      response=>{
        //console.log(response);
        this.reports = JSON.parse(response);
        this.report_id=this.reports[0].report_id;
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
        this.comment = this.reports[0].comment;

        //maintain detail
        this.thereport.value['title'] = this.reports[0].title;
        this.thereport.value['objective'] = this.reports[0].objective;
        this.thereport.value['introduction'] = this.reports[0].introduction;
        this.thereport.value['involvement'] = this.reports[0].involvement;
        this.thereport.value['perkara'] = this.reports[0].perkara_hendak_maklum;
        this.thereport.value['vip'] = this.reports[0].jemputan_vip;
        this.thereport.value['impak'] = this.reports[0].impak_program;
        this.thereport.value['pencapaian'] = this.reports[0].pencapaian;
        this.thereport.value['rumusan'] = this.reports[0].rumusan;
        this.thereport.value['cadangan'] = this.reports[0].cadangan;      }
    );

    this.isLeader = localStorage.getItem('role') == ROLE.leader;
  }
  checking():void{
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
    if(this.thereport.valid){
      this.thereport.value['report_id'] = localStorage.getItem('ReportID');
      this.service.sendReport(this.thereport.value).subscribe(
        res=>{
          this.saving(JSON.parse(res).message)
        }
      )
    }
    else{
      this.failSaving();
    }
  }

  async saving(data:any){
    const alert = await this.alertController.create({
      header : 'Alert',
      message : data,
      buttons : ['Continue']
    })
    await alert.present();
  }

  async failSaving(){
    const alert = await this.alertController.create({
      header : 'Alert',
      message : "Please ensure there is no empty form !",
      buttons : ['Continue']
    })
    await alert.present();
  }

  sendToReviewer(data: { reportId?: any, myStatus?: any }){
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.thereport.value['status'] = REPORT_STATUS.reviewerReview;
    //data.reportId = "woi";
   // console.log(data);
    //console.log(this.thereport.value['status']);
    this.service.approveReport(this.thereport.value).subscribe(
      res=>{
      }
    )
    this.alertSendReviewer();
  }

  sendToLeader(data: { reportId?: any, myStatus?: any }){
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.thereport.value['status'] = REPORT_STATUS.leaderReview;
    //data.reportId = "woi";
    //console.log(data);
    //console.log(this.thereport.value['status']);
    this.service.approveReport(this.thereport.value).subscribe(
      res=>{

      }
    )
    this.alertSendLeader();
  }

  clearForm(){
    this.thereport.reset();
  }


  actReport(){
    this.actRep = true;
    this.finRep = false;
    this.attacRep = false;
    this.partRep = false;
    this.comRep = false;
  }
  finReport(){
    this.actRep = false;
    this.finRep = true;
    this.attacRep = false;
    this.partRep = false;
    this.comRep = false;
  }
  attachmentReport(){
    this.actRep = false;
    this.finRep = false;
    this.attacRep = true;
    this.partRep = false;
    this.comRep = false;
  }
  partReport(){
    this.actRep = false;
    this.finRep = false;
    this.attacRep = false;
    this.partRep = true;
    this.comRep = false;
  }
  commentReport(){
    this.actRep = false;
    this.finRep = false;
    this.attacRep = false;
    this.partRep = false;
    this.comRep = true;
  }

  async alertSendReviewer(){
    const alert = await this.alertController.create({
      header : 'Success',
      message : 'Report has been sent to the reviewer!',
      buttons : ['Continue']
    })
    await alert.present();
  }
  async alertSendLeader(){
    const alert = await this.alertController.create({
      header : 'Success',
      message : 'Report has been sent to the leader!',
      buttons : ['Continue']
    })
    await alert.present();
  }
}
