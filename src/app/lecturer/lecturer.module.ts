import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LectReportComponent } from './lect-report/lect-report.component';
import { LecturerComponent } from './lecturer.component';
import { LectNavbarComponent } from './lect-navbar/lect-navbar.component';
import { LectTopNavbarComponent } from './lect-navbar/lect-top-navbar/lect-top-navbar.component';
import { LecturerHomeComponent } from './lecturer-home/lecturer-home.component';
import { ReportDetailsComponent } from './lect-report/report-details/report-details.component';
import { RouterModule } from '@angular/router';
import { LectdashComponent } from './lectdash/lectdash.component';
import { LectComReportComponent } from './lect-report/lect-com-report/lect-com-report.component';
import { LectFinancialReportComponent } from './lect-report/report-details/lect-financial-report/lect-financial-report.component';
import { LectReportAttachmentComponent } from './lect-report/report-details/lect-report-attachment/lect-report-attachment.component';
import { LectFinancialKewanganReportComponent } from './lect-report/report-details/lect-financial-kewangan-report/lect-financial-kewangan-report.component';
import { LectEventComponent } from './lect-event/lect-event.component';
import { LectAnnouncementComponent } from './lect-announcement/lect-announcement.component';
import { PartListLecturerComponent } from './lect-report/report-details/part-list-lecturer/part-list-lecturer.component';


@NgModule({
  declarations: [
    LectReportComponent,
    LecturerComponent,
    LectNavbarComponent,
    LectTopNavbarComponent,
    LecturerHomeComponent,
    ReportDetailsComponent,
    LectdashComponent,
    LectComReportComponent,
    LectFinancialReportComponent,
    LectReportAttachmentComponent,
    LectFinancialKewanganReportComponent,
    LectEventComponent,
    LectAnnouncementComponent,
    PartListLecturerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LecturerModule { }
