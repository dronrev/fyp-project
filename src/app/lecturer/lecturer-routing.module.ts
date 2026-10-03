import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../guard/authentication.guard';
import { RoleGuard } from '../guard/role.guard';
import { LectAnnouncementComponent } from './lect-announcement/lect-announcement.component';
import { LectEventComponent } from './lect-event/lect-event.component';
import { LectListOfStudentComponent } from './lect-list-of-student/lect-list-of-student.component';
import { LectReportComponent } from './lect-report/lect-report.component';
import { ReportDetailsComponent } from './lect-report/report-details/report-details.component';
import { LectdashComponent } from './lectdash/lectdash.component';
import { LecturerHomeComponent } from './lecturer-home/lecturer-home.component';
import { LecturerComponent } from './lecturer.component';

const routes: Routes = [
  //{path : '', redirectTo: 'home-admin', pathMatch: 'full'},
  { path : '', component : LecturerComponent,children:[
    { path : 'reviewer-home', component : LecturerHomeComponent},
    { path : 'reviewer-reports', component : LectReportComponent},
    { path : 'reviewer-dashboard', component : LectdashComponent},
    { path : 'reviewer-reports/review', component : ReportDetailsComponent},
    { path : 'reviewer-events',component : LectEventComponent},
    { path : 'reviewer-announcements',component : LectAnnouncementComponent},
    { path : 'members',component : LectListOfStudentComponent}
    ],canActivate:[RoleGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
