import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Role } from '../login/role.model';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  roleSelected = "";
  role : Role [] = [
    new Role("1","Student"),
    new Role("2","Lecturer"),
    new Role("3","Admin")
  ];

  LoginForm = new FormGroup({
    email_address : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
    user_role : new FormControl("")
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
    console.log(this.LoginForm.value);
    if(this.LoginForm.valid){
      if(this.LoginForm.value['user_role'] == '1'){
        this.http.proceedLogin(this.LoginForm.value).subscribe(res=>{
          console.log(res);
          if(res != null){
            //this.responseData = res;
            this.responseData = JSON.parse(res);
            if(this.responseData.token == undefined){
              this.notify();
              this.router.navigate(['sign-in']);
            }
            else{
              localStorage.setItem('token',this.responseData.token);
              localStorage.setItem('id',this.responseData.id);
              localStorage.setItem('name',this.responseData.name);
              localStorage.setItem('auth',this.LoginForm.value['user_role']);
              localStorage.setItem('_elorfostudent_',this.responseData.role);
              this.router.navigate(['/student/home']);
              //this.http.changeName(this.responseData.name);
            }
          }
        })
      }
      if(this.LoginForm.value['user_role'] == '2'){
        this.http.proceedLogin(this.LoginForm.value).subscribe(res=>{
          console.log(res);
          if(res != null){
            //this.responseData = res;
            this.responseData = JSON.parse(res);
            if(this.responseData.token == undefined){
              this.notify();
              this.router.navigate(['sign-in']);
            }
            else{
              localStorage.setItem('token',this.responseData.token);
              localStorage.setItem('id',this.responseData.id);
              localStorage.setItem('name',this.responseData.name);
              this.http.isTDA(this.responseData.id).subscribe(
                res=>{
                  this.lectRole = JSON.parse(res);
                  console.log(res)
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
