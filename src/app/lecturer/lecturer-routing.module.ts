import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../guard/authentication.guard';
import { RoleGuard } from '../guard/role.guard';
import { LectReportComponent } from './lect-report/lect-report.component';
import { ReportDetailsComponent } from './lect-report/report-details/report-details.component';
import { LectdashComponent } from './lectdash/lectdash.component';
import { LecturerHomeComponent } from './lecturer-home/lecturer-home.component';
import { LecturerComponent } from './lecturer.component';

const routes: Routes = [
  //{path : '', redirectTo: 'home-admin', pathMatch: 'full'},
  { path : 'Lecturer', component : LecturerComponent,canActivate:[RoleGuard]},
  { path : 'HomeLecturer ', component : LecturerHomeComponent,canActivate:[RoleGuard] },
  { path : 'ReportLecturer', component : LectReportComponent,canActivate:[RoleGuard]},
  { path : 'Detail-Report', component : ReportDetailsComponent,canActivate:[RoleGuard]},
  { path : 'LectDashboard', component : LectdashComponent,canActivate:[RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
