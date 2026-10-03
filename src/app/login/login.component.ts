import { Component, ElementRef, Input, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { Role } from './role.model';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roleSelected = "";
  role : Role [] = [
    new Role("1","Student"),
    new Role("2","Lecturer"),
    new Role("3","Admin")
  ];

  LoginForm = new UntypedFormGroup({
    email_address : new UntypedFormControl("", Validators.required),
    password : new UntypedFormControl("", Validators.required),
    user_role : new UntypedFormControl("")
  });

  messageClass = "";
  message = "";
  studentId : any;
  editData : any;
  responseData : any;
  lectRole : any;

  response = "";

  constructor(private router: Router, private http:AuthService,private alertcontrol : AlertController) { }


  ngOnInit(): void {
    localStorage.clear();
  }

  async notify(){
    const messages = await this.alertcontrol.create({
      header : 'Login Failed',
      message : 'Unknown Username or Email !',
      buttons : ['Continue']
    });
    await messages.present();
  }

  onLogin(){
    if(this.LoginForm.valid){
      if(this.LoginForm.value['user_role'] == '1'){
        this.http.proceedLogin(this.LoginForm.value).subscribe(res=>{
          if(res != null){
            //this.responseData = res;
            this.responseData = JSON.parse(res);
            if(this.responseData.token == undefined){
              this.notify();
              this.router.navigate(['login']);
            }
            else{
              localStorage.setItem('token',this.responseData.token);
              localStorage.setItem('id',this.responseData.id);
              localStorage.setItem('name',this.responseData.name);
              localStorage.setItem('auth',this.LoginForm.value['user_role']);
              this.router.navigate(['/student/home']);
              //this.http.changeName(this.responseData.name);
            }
          }
        })
      }
      if(this.LoginForm.value['user_role'] == '2'){
        this.http.proceedLogin(this.LoginForm.value).subscribe(res=>{
          if(res != null){
            //this.responseData = res;
            this.responseData = JSON.parse(res);
            if(this.responseData.token == undefined){
              this.notify();
              this.router.navigate(['login']);
            }
            else{
              localStorage.setItem('token',this.responseData.token);
              localStorage.setItem('id',this.responseData.id);
              localStorage.setItem('name',this.responseData.name);
              this.http.isTDA(this.responseData.id).subscribe(
                res=>{
                  this.lectRole = JSON.parse(res);
                  if(this.lectRole.role == "TDA"){
                    localStorage.setItem('_sepesial_elor_rof_','TDA');
                  }
                  else{
                    localStorage.setItem('_sepesial_elor_rof_','lecturer');
                  }
                }
              )
              localStorage.setItem('auth',this.LoginForm.value['user_role']);
              this.router.navigate(['/lecturer']);

              //this.http.changeName(this.responseData.name);
            }
          }
        })
      }
    }
  }

  show = false;

  showingP = "password";

  showPassword(){
    this.showingP = "text";
  }
}


