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
import { AnnouncementListComponent } from './announcement/announcement-list/announcement-list.component';
import { AnnouncementFormComponent } from './announcement/announcement-form/announcement-form.component';
import { AnnouncementDetailsComponent } from './announcement/announcement-list/announcement-details/announcement-details.component';
import { VoteResultComponent } from './event/vote-result/vote-result.component';
import { ResultsComponent } from './event/vote-result/results/results.component';
import { PendingUserComponent } from './pending-user/pending-user.component';
import { MyAnnouncementComponent } from './announcement/my-announcement/my-announcement.component';
import { DetailsComponent } from './announcement/my-announcement/details/details.component';
import { VotingComponent } from './voting/voting.component';
import { VotingDetailsComponent } from './voting/voting-details/voting-details.component';

const routes: Routes = [
  { path : '',component : StudentComponent,data:{title:'Home'},
  children:[
    {path : 'home', component : HomeComponent,data:{title : 'Home'}},
    {path : 'report', component : ReportComponent, data:{title: 'Report'}},
    {path : 'report/create-report', component : CreateReportComponent , data:{title: 'Report'}},
    {path : 'report/editreport/:report_id', component : EditreportComponent , data:{title: 'Report'}},
    {path : 'report/editreport/:report_id/financial-report',component : FinancialReportComponent,data:{title: 'Report'}},
    {path : 'event', component : EventComponent , data:{title: 'Event'}},
    {path : 'event/add-event', component : AddEventComponent , data:{title: 'Event'}},
    {path : 'event/vote-result',component : VoteResultComponent,data:{title : 'Vote Result'}},
    {path : 'event/vote-result/:activity_id/result', component : ResultsComponent, data:{title: 'Vote Result'}},
    {path : 'contact', component : ContactComponent , data:{title: 'Contact'}},
    {path : 'announcement', component : AnnouncementComponent, data:{title: 'Announcement'}},
    {path : 'announcement/list-of-announcement', component : AnnouncementListComponent,data:{title: 'Announcement'}},
    {path : 'announcement/create-new-announcement', component : AnnouncementFormComponent,data:{title: 'Announcement'}},
    {path : 'announcement/my-announcement', component : MyAnnouncementComponent,data :{title : 'Announcement'}},
    {path : 'announcement/my-announcement/:announcement_id', component : DetailsComponent},
    {path : 'announcement/:announcement_id', component : AnnouncementDetailsComponent,data:{title: 'Announcement'}},
    {path : 'full-report', component : FullReportComponent,data:{title: 'Report'}},
    {path : 'e-cert', component : CertificateComponent,data:{title: 'Certificate'}},
    {path : 'select-member', component : SelectMemberComponent,data:{title: 'Voting'}},
    {path : 'select-member/selecting/:activity_id',component : ChooseMemberComponent,data:{title: 'Voting'}},
    {path : 'dashboard', component : StudentDashboardComponent, data:{title : 'Dashboard'}},
    {path : 'voting-activity',component : VotingComponent},
    {path : 'voting-activity/voting-process/:vote_id' , component : VotingDetailsComponent},
    {path : 'report/editreport/:report_id/addParticipant', component : AddParticipantComponent},
    {path : 'profile', component : ProfileComponent},
    {path : 'pending-user',component : PendingUserComponent},
    {path : 'report/editreport/:report_id/image', component : UploadImageComponent}],canActivate:[AuthenticationGuard]},

    {path : 'graph',component : FinancialChartComponent},
    {path : 'header',component : HeaderComponent}

  //{path : '**', component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
