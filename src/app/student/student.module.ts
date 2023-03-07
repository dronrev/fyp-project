import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateReportComponent } from './report/create-report/create-report.component';
import { EditreportComponent } from './report/editreport/editreport.component';
import { HeaderComponent } from './header/header.component';
import { ComReportComponent } from './report/com-report/com-report.component';
import { ContactComponent } from './contact/contact.component';
import { CertificateComponent } from './certificate/certificate.component';
import { TopNavComponent } from './nav-bar/top-nav/top-nav.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementFormComponent } from './announcement/announcement-form/announcement-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullReportComponent } from './report/full-report/full-report.component';
import { SelectMemberComponent } from './select-member/select-member.component';
import { MemberComponent } from './select-member/member/member.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddParticipantComponent } from './report/editreport/add-participant/add-participant.component';
import { StudentComponent } from '../student/student.component';
import { StudentRoutingModule } from './student-routing.module';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { UploadImageComponent } from './report/editreport/upload-image/upload-image.component';
import { ChooseMemberComponent } from './select-member/member/choose-member/choose-member.component';
import { UpcomingActivityComponent } from './dashboard/upcoming-activity/upcoming-activity.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { EventComponent } from './event/event.component';
import { FinancialChartComponent } from './dashboard/financial-chart/financial-chart.component';
import { FinancialReportComponent } from './report/financial-report/financial-report.component';
import { FinancialFormComponent } from './report/financial-report/financial-form/financial-form.component';
import { ReportDetailComponent } from './report/financial-report/report-detail/report-detail.component';
import { AnnouncementListComponent } from './announcement/announcement-list/announcement-list.component';
import { AnnouncementDetailsComponent } from './announcement/announcement-list/announcement-details/announcement-details.component';
import { VoteResultComponent } from './event/vote-result/vote-result.component';
import { ResultsComponent } from './event/vote-result/results/results.component';
import { ProfImage } from './profile/prof-img.component';
import { PendingUserComponent } from './pending-user/pending-user.component';
import { FooterComponent } from '../footer/footer.component';
import { MyAnnouncementComponent } from './announcement/my-announcement/my-announcement.component';
import { DetailsComponent } from './announcement/my-announcement/details/details.component';
import { VotingComponent } from './voting/voting.component';
import { VotingDetailsComponent } from './voting/voting-details/voting-details.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    HomeComponent,
    ReportComponent,
    NavBarComponent,
    CreateReportComponent,
    EditreportComponent,
    HeaderComponent,
    ComReportComponent,
    ContactComponent,
    CertificateComponent,
    TopNavComponent,
    AnnouncementComponent,
    AnnouncementFormComponent,
    DashboardComponent,
    FullReportComponent,
    SelectMemberComponent,
    MemberComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    ProfileComponent,
    AddParticipantComponent,
    StudentComponent,
    EditreportComponent,
    UploadImageComponent,
    AddEventComponent,
    ChooseMemberComponent,
    UpcomingActivityComponent,
    EventComponent,
    FinancialChartComponent,
    FinancialReportComponent,
    FinancialFormComponent,
    ReportDetailComponent,
    AnnouncementListComponent,
    AnnouncementDetailsComponent,
    VoteResultComponent,
    ResultsComponent,
    ProfImage,
    PendingUserComponent,
    FooterComponent,
    MyAnnouncementComponent,
    DetailsComponent,
    VotingComponent,
    VotingDetailsComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    StudentRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class StudentModule { }
