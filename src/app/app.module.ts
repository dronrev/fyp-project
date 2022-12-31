import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingService } from './logging.service';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { EventsService } from './student/event/events.service';
import { IonicModule } from '@ionic/angular';
import { AdminModule } from './admin/admin/admin.module';
import { AdminRoutingModule } from './admin/admin/admin-routing.module';
import { UsersService } from './admin/users.service';
import { LecturerModule } from './lecturer/lecturer.module';
import { LecturerRoutingModule } from './lecturer/lecturer-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ReportsService } from './student/report/reports.service';
import { StudentModule } from './student/student.module';
import { StudentRoutingModule } from './student/student-routing.module';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupUserComponent,
    ErrorPageComponent,
    SignInComponent,
    ManageUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    IonicModule.forRoot(),
    AdminModule,
    AdminRoutingModule,
    LecturerModule,
    LecturerRoutingModule,
    StudentRoutingModule,
    StudentModule

  ],
  providers: [LoggingService,EventsService,UsersService,ReportsService,
    {
      provide : HTTP_INTERCEPTORS,
     useClass : TokenInterceptorService,
      multi : true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
