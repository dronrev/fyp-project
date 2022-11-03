import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateReportComponent } from './report/create-report/create-report.component';
import { EditreportComponent } from './report/editreport/editreport.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { ElementRef } from '@angular/core';
import { LoggingService } from './logging.service';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { ComReportComponent } from './report/com-report/com-report.component';
import { ContactComponent } from './contact/contact.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { ReportsService } from './report/reports.service';
import { EventsService } from './event/events.service';
import { IonicModule } from '@ionic/angular';
import { AdminModule } from './admin/admin/admin.module';
import { AdminRoutingModule } from './admin/admin/admin-routing.module';
import { TopNavComponent } from './nav-bar/top-nav/top-nav.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementFormComponent } from './announcement/announcement-form/announcement-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullReportComponent } from './report/full-report/full-report.component';
import { UsersService } from './admin/users.service';
import { SelectMemberComponent } from './select-member/select-member.component';
import { MemberComponent } from './select-member/member/member.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';

import { ProfileComponent } from './profile/profile.component';
import { LecturerModule } from './lecturer/lecturer.module';
import { LecturerRoutingModule } from './lecturer/lecturer-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { EditreportService } from './report/editreport/editreport.service';
import { AddParticipantComponent } from './report/editreport/add-participant/add-participant.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReportComponent,
    NavBarComponent,
    CreateReportComponent,
    EditreportComponent,
    HeaderComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    SignupUserComponent,
    ComReportComponent,
    ContactComponent,
    CertificateComponent,
    AddEventComponent,
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
    ErrorPageComponent,
    SignInComponent,
    AddParticipantComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    IonicModule.forRoot(),
    AdminModule,
    AdminRoutingModule,
    LecturerModule,
    LecturerRoutingModule

  ],
  providers: [LoggingService,ReportsService,EventsService,EditreportService,UsersService,
    {
      provide : HTTP_INTERCEPTORS,
     useClass : TokenInterceptorService,
      multi : true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
