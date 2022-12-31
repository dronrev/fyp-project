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
  { path : '', component : LecturerComponent,children:[
    { path : 'HomeLecturer', component : LecturerHomeComponent},
    { path : 'ReportLecturer', component : LectReportComponent},
    { path : 'Detail-Report', component : ReportDetailsComponent},
    { path : 'LectDashboard', component : LectdashComponent},
    { path : 'lectEditReport', component : ReportDetailsComponent}
    ],canActivate:[RoleGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
