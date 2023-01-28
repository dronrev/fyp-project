import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { LecturerFormComponent } from '../lecturer-form/lecturer-form.component';
import { IonicModule } from '@ionic/angular';
import { TopNavAdminComponent } from '../admin-navbar/top-nav-admin/top-nav-admin.component';
import { AssignComponent } from '../assign/assign.component';
import { AdminComponent } from '../admin.component';
import { AssignPmfkikkComponent } from '../assign/assign-pmfkikk/assign-pmfkikk.component';
import { AdminContactComponent } from '../admin-contact/admin-contact.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    RegisterUserComponent,
    StudentFormComponent,
    LecturerFormComponent,
    TopNavAdminComponent,
    AssignComponent,
    AssignPmfkikkComponent,
    AdminContactComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
