import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from './report/create-report/create-report.component';
import { EditreportComponent } from './report/editreport/editreport.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { EventComponent } from './event/event.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { ContactComponent } from './contact/contact.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { FullReportComponent } from './report/full-report/full-report.component';
import { CertificateComponent } from './certificate/certificate.component';
import { SelectMemberComponent } from './select-member/select-member.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AddParticipantComponent } from './report/editreport/add-participant/add-participant.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'login', component: LoginComponent},
  {
    path : 'home', component: HomeComponent,data: {title: 'Home' }
    ,canActivate:[AuthenticationGuard]
  },
  {path : 'report', component : ReportComponent, data:{title: 'Report'},canActivate:[AuthenticationGuard]},
  {path : 'create-report', component : CreateReportComponent , data:{title: 'Report'},canActivate:[AuthenticationGuard]},
  {path : 'editreport', component : EditreportComponent , data:{title: 'Report'},canActivate:[AuthenticationGuard]},
  {path : 'event', component : EventComponent , data:{title: 'Event'},canActivate:[AuthenticationGuard]},
  {path : 'signup', component : SignupUserComponent,canActivate:[AuthenticationGuard]},
  {path : 'contact', component : ContactComponent , data:{title: 'Contact'},canActivate:[AuthenticationGuard]},
  {path : 'add-event', component : AddEventComponent , data:{title: 'Event'},canActivate:[AuthenticationGuard]},
  {path : 'announcement', component : AnnouncementComponent, data:{title: 'Announcement'},canActivate:[AuthenticationGuard]},
  {path : 'full-report', component : FullReportComponent,canActivate:[AuthenticationGuard]},
  {path : 'e-cert', component : CertificateComponent,canActivate:[AuthenticationGuard]},
  {path : 'select-member', component : SelectMemberComponent,canActivate:[AuthenticationGuard]},
  {path : 'dashboard', component : StudentDashboardComponent,canActivate:[AuthenticationGuard]},
  {path : 'profile', component : ProfileComponent},
  {path : 'MainPage', component : SignInComponent},
  {path : 'addParticipant', component : AddParticipantComponent}
  //{path : '**', component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
