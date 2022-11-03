import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/guard/authentication.guard';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AssignComponent } from '../assign/assign.component';
import { RegisterUserComponent } from '../register-user/register-user.component';

const routes: Routes = [
  //{path : '', redirectTo: 'home-admin', pathMatch: 'full'},
  {path : 'home-admin', component : AdminHomeComponent},
  {path : 'register-user', component : RegisterUserComponent},
  {path : 'assign', component : AssignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
