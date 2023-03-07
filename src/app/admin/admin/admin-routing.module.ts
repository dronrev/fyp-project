import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guard/admin.guard';
import { AdminContactComponent } from '../admin-contact/admin-contact.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminVoteActivityComponent } from '../admin-vote-activity/admin-vote-activity.component';
import { CreateNewVoteActComponent } from '../admin-vote-activity/create-new-vote-act/create-new-vote-act.component';
import { DetailVoteActivityComponent } from '../admin-vote-activity/detail-vote-activity/detail-vote-activity.component';
import { EditVoteActivityComponent } from '../admin-vote-activity/edit-vote-activity/edit-vote-activity.component';
import { AdminComponent } from '../admin.component';
import { AssignComponent } from '../assign/assign.component';
import { ManageUserComponent } from '../manage-user/manage-user.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { AdminAnnouncementComponent } from './admin-announcement/admin-announcement.component';
import { CreateAnnouncementComponent } from './admin-announcement/create-announcement/create-announcement.component';
import { EditAnnouncementComponent } from './admin-announcement/edit-announcement/edit-announcement.component';
import { CertificateTemplateComponent } from './certificate-template/certificate-template.component';
import { ListOfEventAdminComponent } from './list-of-event-admin/list-of-event-admin.component';
import { ListOfReportAdminComponent } from './list-of-report-admin/list-of-report-admin.component';

const routes: Routes = [
  //{path : '', redirectTo: 'home-admin', pathMatch: 'full'},
  {path : '', component : AdminComponent,children:[
    {path : 'home-admin',component: AdminHomeComponent},
    {path : 'register-user', component : RegisterUserComponent},
    {path : 'voting', component : AdminVoteActivityComponent},
    {path : 'new-vote-act', component : CreateNewVoteActComponent},
    {path : 'voting/vote-acti/:vote_id', component : EditVoteActivityComponent},
    {path : 'voting/vote-detail/:vote_id', component : DetailVoteActivityComponent},
    {path : 'assign', component : AssignComponent},
    {path : 'manage-user', component : ManageUserComponent},
    {path : 'admin-contact',component : AdminContactComponent},
    {path : 'admin-announcement', component : AdminAnnouncementComponent},
    {path : 'admin-announcement/create-new', component : CreateAnnouncementComponent},
    {path : 'admin-announcement/edit/:announcement_id', component : EditAnnouncementComponent},
    {path : 'cert-template',component : CertificateTemplateComponent},
    {path : 'list-of-report',component : ListOfReportAdminComponent},
    {path : 'list-of-event',component : ListOfEventAdminComponent}
  ],canActivate:[AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
