import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { LectReportService } from '../lect-report.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Detail } from 'src/app/student/report/editreport/editreport.component';
import { Report } from 'src/app/student/report/report.model';
import { ReportsService } from 'src/app/student/report/reports.service';
import { AlertController, IonModal } from '@ionic/angular';
@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
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
  comment?: string;
  actRep = false;
  finRep = false;
  attacRep = false;
  partRep = false;
  hideSendTDA = true;

  constructor(private service : ReportsService,
    private alertcontrol : AlertController,
    private commentService : LectReportService) { }

  value!: string;
  reports!: Report[];
  thereport = new FormGroup({
    'report_id': new FormControl(localStorage.getItem('reportID')),
    'title': new FormControl(""),
    'objective': new FormControl(""),
    'introduction': new FormControl(""),
    'involvement': new FormControl(""),
    'perkara': new FormControl(""),
    'vip': new FormControl(""),
    'impak': new FormControl(""),
    'pencapaian': new FormControl(""),
    'rumusan': new FormControl(""),
    'cadangan': new FormControl(""),
    'status' : new FormControl(""),
    'comment' : new FormControl("")
  });

  ngOnInit(): void {
    if(localStorage.getItem('_sepesial_elor_rof_') == 'TDA')
    this.hideSendTDA = false;


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
        //this.thereport.value['objective'] = this.reports[0].objective
        this.introduction=this.reports[0].introduction;
        this.involvement=this.reports[0].involvement;
        this.perkara_hendak_maklum=this.reports[0].perkara_hendak_maklum;
        this.jemputan_vip=this.reports[0].jemputan_vip;
        this.impak_program=this.reports[0].impak_program;
        this.pencapaian=this.reports[0].pencapaian;
        this.rumusan=this.reports[0].rumusan;
        this.cadangan=this.reports[0].cadangan;
        console.log(this.reports)

  });
  }

  commentData(){
    this.reports[0].comment;
  }


  approve(data: { reportId?: any, myStatus?: any }){
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.thereport.value['status'] = 3;
    data.reportId = "woi";
    console.log(data);
    console.log(this.thereport.value['status']);
    this.service.approveReport(this.thereport.value).subscribe(
      res=>{
        console.log(res);
      }
    )
    this.alertMessage();
  }

  approveTDA(data: { reportId?: any, myStatus?: any }){
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.thereport.value['status'] = 4;
    data.reportId = "woi";
    console.log(data);
    console.log(this.thereport.value['status']);
    this.service.approveReport(this.thereport.value).subscribe(
      res=>{
        console.log(res);
      }
    )
    this.alertMessage();
  }

  async alertMessage(){
    const alert = await this.alertcontrol.create({
      header: 'Report Update',
      message : "Report approved !",
      buttons : ['OK']
    });
    await alert.present();
  }

  reject(data: { reportId?: any, myStatus?: any }){
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.thereport.value['status'] = 0;
    data.reportId = "woi";
    console.log(data?.reportId);
    console.log(this.thereport.value['status']);
    this.service.approveReport(data).subscribe(
      res=>{
        console.log(res);
      }
    )
    this.alertRejectMessage();
  }
  rejectTDA(data: { reportId?: any, myStatus?: any }){
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.thereport.value['status'] = 0;
    data.reportId = "woi";
    console.log(data?.reportId);
    console.log(this.thereport.value['status']);
    this.service.approveReport(data).subscribe(
      res=>{
        console.log(res);
      }
    )
    this.alertRejectMessage();
  }

  async alertRejectMessage(){
    const alert = await this.alertcontrol.create({
      header: 'Report Update',
      message : "Report rejected!",
      buttons : ['OK']
    });
    await alert.present();
  }

  @ViewChild(IonModal)
  modal!: IonModal;

  cancel(){
    this.modal.dismiss(null, 'cancel');
  }

  sendComment(){
    console.log(this.thereport.value)
    this.thereport.value.report_id = localStorage.getItem('ReportID')
    //console.log(data)
    //console.log(this.reports[0].report_id);
    this.commentService.sendComment(this.thereport.value).subscribe(
      res=>{
        this.alertComment(JSON.parse(res).comment)
      }
    )
  }

  async alertComment(data:any){
    const alert = await this.alertcontrol.create({
      header: 'Report Update',
      message : data,
      buttons : ['OK']
    });
    await alert.present();
  }

  //send report to TDA
  sendToTDA(data: { reportId?: any, myStatus?: any }){
    console.log('gimme your fking money!');
    this.thereport.value['report_id'] = localStorage.getItem('ReportID');
    this.thereport.value['status'] = 3;
    data.reportId = "woi";
    console.log(data);
    console.log(this.thereport.value['status']);
    this.service.approveReport(this.thereport.value).subscribe(
      res=>{
        console.log(res);
      }
    )
    this.alertMessage();
  }

  actReport(){
    this.actRep = true;
    this.finRep = false;
    this.attacRep = false;
    this.partRep = false;
  }
  finReport(){
    this.actRep = false;
    this.finRep = true;
    this.attacRep = false;
    this.partRep = false;
  }
  attachmentReport(){
    this.actRep = false;
    this.finRep = false;
    this.attacRep = true;
    this.partRep = false;
  }
  partReport(){
    this.actRep = false;
    this.finRep = false;
    this.attacRep = false;
    this.partRep = true;
  }

}
