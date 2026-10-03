import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { EventsService } from './student/event/events.service';
import { SharedModule } from 'src/app/shared/shared.module';
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
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
    declarations: [
        AppComponent,
        SignupUserComponent,
        ErrorPageComponent,
        SignInComponent,
        ManageUserComponent,
        DashboardComponent,

    ],
    providers: [provideZoneChangeDetection(), EventsService, UsersService, ReportsService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        SharedModule,
        AdminModule,
        AdminRoutingModule,
        LecturerModule,
        LecturerRoutingModule,
        StudentRoutingModule,
        StudentModule
    ]
})
export class AppModule { }
