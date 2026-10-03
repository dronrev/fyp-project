import { APP_NAME, PORTAL, portalOf } from 'src/app/shared/app-config';
import { Component, ElementRef, Input, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import { Role } from '../login/role.model';
import { AuthService } from '../service/auth.service';



// Where each portal lands after signing in.
const HOME_ROUTE: { [portal: string]: string } = {
  [PORTAL.member]: '/home',
  [PORTAL.reviewer]: '/reviewer-home',
  [PORTAL.admin]: '/home-admin'
};

@Component({
  standalone: false,
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  appName = APP_NAME;

  roleSelected = "";
  role : Role [] = [
    new Role(PORTAL.member,"Member"),
    new Role(PORTAL.reviewer,"Reviewer"),
    new Role(PORTAL.admin,"Admin")
  ];

  LoginForm = new UntypedFormGroup({
    email_address : new UntypedFormControl("", Validators.required),
    password : new UntypedFormControl("", Validators.required),
    user_role : new UntypedFormControl(PORTAL.member)
  });


  messageClass = "";
  message = "";
  studentId : any;
  editData : any;
  responseData : any;

  response = "";

  constructor(private router: Router, private http:AuthService,private alertcontrol : AlertService) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  async notify(){
    const messages = await this.alertcontrol.create({
      header : 'Login Failed',
      message : 'Wrong username or password.',
      buttons : ['Continue']
    });
    await messages.present();
  }

  onLogin(){
    if(!this.LoginForm.valid){
      return;
    }
    this.http.login(this.LoginForm.value).subscribe({
      next: res=>{
        this.responseData = res ? JSON.parse(res) : null;
        const portal = portalOf(this.responseData?.role);
        if(!this.responseData?.token || !portal){
          this.notify();
          return;
        }
        localStorage.setItem('token',this.responseData.token);
        localStorage.setItem('id',this.responseData.id);
        localStorage.setItem('name',this.responseData.name);
        localStorage.setItem('email_address',this.responseData.email_address || '');
        localStorage.setItem('role',this.responseData.role);
        localStorage.setItem('group_id',this.responseData.group_id || '');
        localStorage.setItem('portal',portal);
        this.router.navigate([HOME_ROUTE[portal]]);
      },
      error: ()=>{
        this.notify();
      }
    })
  }

  showPass ="password"

  togglePassword(){
    this.showPass = this.showPass == "password" ? "text" : "password";
  }
}
