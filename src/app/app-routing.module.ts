import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin/admin/admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LecturerRoutingModule } from './lecturer/lecturer-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { StudentRoutingModule } from './student//student-routing.module';

const routes: Routes = [
  {path : '', redirectTo: 'stu-dashboard', pathMatch: 'full'},
  {path : 'stu-dashboard', component : DashboardComponent},
  {path : 'sign-in',component : SignInComponent},
  {path : 'new-register', component : SignupUserComponent},
  {
    path : 'student',loadChildren:() =>
    import(`./student/student-routing.module`).then((m) => m.StudentRoutingModule)
  },
  {
    path : 'lecturer',loadChildren:() =>
    import(`./lecturer/lecturer-routing.module`).then((m)=> m.LecturerRoutingModule)
  },
  {
    path : 'admin',loadChildren:() =>
    import(`./admin/admin/admin-routing.module`).then((m)=> m.AdminRoutingModule)
  },
  {path : '**', component : ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),StudentRoutingModule,LecturerRoutingModule,AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
