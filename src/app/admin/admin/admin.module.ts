import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { LecturerFormComponent } from '../lecturer-form/lecturer-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssignComponent } from '../assign/assign.component';
import { AdminComponent } from '../admin.component';
import { AdminContactComponent } from '../admin-contact/admin-contact.component';
import { AdminVoteActivityComponent } from '../admin-vote-activity/admin-vote-activity.component';
import { CreateNewVoteActComponent } from '../admin-vote-activity/create-new-vote-act/create-new-vote-act.component';
import { EditVoteActivityComponent } from '../admin-vote-activity/edit-vote-activity/edit-vote-activity.component';
import { AdminAnnouncementComponent } from './admin-announcement/admin-announcement.component';
import { CreateAnnouncementComponent } from './admin-announcement/create-announcement/create-announcement.component';
import { CertificateTemplateComponent } from './certificate-template/certificate-template.component';
import { DetailVoteActivityComponent } from '../admin-vote-activity/detail-vote-activity/detail-vote-activity.component';
import { EditAnnouncementComponent } from './admin-announcement/edit-announcement/edit-announcement.component';
import { ListOfReportAdminComponent } from './list-of-report-admin/list-of-report-admin.component';
import { ListOfEventAdminComponent } from './list-of-event-admin/list-of-event-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    RegisterUserComponent,
    StudentFormComponent,
    LecturerFormComponent,
    AssignComponent,
    AdminContactComponent,
    AdminVoteActivityComponent,
    CreateNewVoteActComponent,
    EditVoteActivityComponent,
    AdminAnnouncementComponent,
    CreateAnnouncementComponent,
    CertificateTemplateComponent,
    DetailVoteActivityComponent,
    EditAnnouncementComponent,
    ListOfReportAdminComponent,
    ListOfEventAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
