import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/guard/authentication.guard';
import { AdminContactComponent } from '../admin-contact/admin-contact.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminComponent } from '../admin.component';
import { AssignComponent } from '../assign/assign.component';
import { ManageUserComponent } from '../manage-user/manage-user.component';
import { RegisterUserComponent } from '../register-user/register-user.component';

const routes: Routes = [
  //{path : '', redirectTo: 'home-admin', pathMatch: 'full'},
  {path : '', component : AdminComponent,children:[
    {path : 'home-admin',component: AdminHomeComponent},
    {path : 'register-user', component : RegisterUserComponent},
    {path : 'assign', component : AssignComponent},
    {path : 'manage-user', component : ManageUserComponent},
    {path : 'admin-contact',component : AdminContactComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
