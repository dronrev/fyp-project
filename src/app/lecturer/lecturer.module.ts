import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LectReportComponent } from './lect-report/lect-report.component';
import { LecturerComponent } from './lecturer.component';
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
import { LectDashFinancialComponent } from './lectdash/lect-dash-financial/lect-dash-financial.component';
import { LectListOfStudentComponent } from './lect-list-of-student/lect-list-of-student.component';
import { ActivitySummaryDashboardComponent } from './lectdash/activity-summary-dashboard/activity-summary-dashboard.component';
import { CompleteEventComponent } from './lectdash/complete-event/complete-event.component';


@NgModule({
  declarations: [
    LectReportComponent,
    LecturerComponent,
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
    LectDashFinancialComponent,
    LectListOfStudentComponent,
    ActivitySummaryDashboardComponent,
    CompleteEventComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LecturerModule { }
