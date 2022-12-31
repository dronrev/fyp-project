import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from './report/create-report/create-report.component';
import { EditreportComponent } from './report/editreport/editreport.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { EventComponent } from './event/event.component';

import { ContactComponent } from './contact/contact.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { FullReportComponent } from './report/full-report/full-report.component';
import { CertificateComponent } from './certificate/certificate.component';
import { SelectMemberComponent } from './select-member/select-member.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { AddParticipantComponent } from './report/editreport/add-participant/add-participant.component';
import { AuthenticationGuard } from '../guard/authentication.guard';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student.component';
import { UploadImageComponent } from './report/editreport/upload-image/upload-image.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { FinancialChartComponent } from './dashboard/financial-chart/financial-chart.component';
import { ChooseMemberComponent } from './select-member/member/choose-member/choose-member.component';
import { FinancialReportComponent } from './report/financial-report/financial-report.component';

const routes: Routes = [
  { path : '',component : StudentComponent,
  children:[
    {path : 'home', component : HomeComponent},
    {path : 'report', component : ReportComponent, data:{title: 'Report'}},
    {path : 'report/create-report', component : CreateReportComponent , data:{title: 'Report'}},
    {path : 'report/editreport/:report_id', component : EditreportComponent , data:{title: 'Report'}},
    {path : 'report/financial-report',component : FinancialReportComponent},
    {path : 'event', component : EventComponent , data:{title: 'Event'}},
    {path : 'event/add-event', component : AddEventComponent , data:{title: 'Event'}},
    {path : 'contact', component : ContactComponent , data:{title: 'Contact'}},
    {path : 'announcement', component : AnnouncementComponent, data:{title: 'Announcement'}},
    {path : 'full-report', component : FullReportComponent},
    {path : 'e-cert', component : CertificateComponent},
    {path : 'select-member', component : SelectMemberComponent},
    {path : 'select-member/selecting/:activity_id',component : ChooseMemberComponent},
    {path : 'dashboard', component : StudentDashboardComponent},

    {path : 'addParticipant', component : AddParticipantComponent},
    {path : 'profile', component : ProfileComponent},],canActivate:[AuthenticationGuard]},

    {path : 'image', component : UploadImageComponent},
    {path : 'graph',component : FinancialChartComponent},
    {path : 'header',component : HeaderComponent}

  //{path : '**', component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
