import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Report } from '../report.model';
import { ReportsService } from '../reports.service';

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
  constructor(private service:ReportsService) { }
  reports!: Report[];
  thereport = new FormGroup({
    'report_id': new FormControl(localStorage.getItem('reportID')),
    'title': new FormControl("",Validators.required),
    'objective': new FormControl("",[Validators.required, Validators.min(10)]),
    'introduction': new FormControl("",Validators.required),
    'involvement': new FormControl(null,Validators.required),
    'perkara': new FormControl(null,Validators.required),
    'vip': new FormControl(null,Validators.required),
    'impak': new FormControl(null,Validators.required),
    'pencapaian': new FormControl(null,Validators.required),
    'rumusan': new FormControl(null,Validators.required),
    'cadangan': new FormControl(null,Validators.required)
  });

  ngOnInit(): void {
   // this.thereport
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
  editButton(){
    const count = 0;
    this.edit = true;
  }
}
