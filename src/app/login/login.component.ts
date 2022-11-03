import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggingService, TheUser } from '../logging.service';
import { AuthService } from '../service/auth.service';
import { Role } from './role.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roleSelected = "";
  role : Role [] = [
    new Role("0","Your Role"),
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

  response = "";

  constructor(private router: Router, private http:AuthService) { }


  ngOnInit(): void {
    localStorage.clear();
  }
  onLogin(){
    console.log(this.LoginForm.value);
    if(this.LoginForm.valid){
      if(this.LoginForm.value['user_role'] == '1'){
        this.http.proceedLogin(this.LoginForm.value).subscribe(res=>{
          console.log(res);
          if(res != null){
            //this.responseData = res;
            console.log("wei");
            this.responseData = JSON.parse(res);
            if(this.responseData.token == undefined){
              alert("Wrong Email or Password !")
              this.router.navigate(['login']);
            }
            else{
              localStorage.setItem('token',this.responseData.token);
              localStorage.setItem('id',this.responseData.id);
              localStorage.setItem('name',this.responseData.name);
              localStorage.setItem('auth',this.LoginForm.value['user_role']);
              this.router.navigate(['']);
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
              alert("Wrong Email or Password !")
              this.router.navigate(['login']);
            }
            else{
              localStorage.setItem('token',this.responseData.token);
              localStorage.setItem('id',this.responseData.id);
              localStorage.setItem('name',this.responseData.name);
              localStorage.setItem('auth',this.LoginForm.value['user_role']);
              this.router.navigate(['Lecturer']);
              //this.http.changeName(this.responseData.name);
            }
          }
        })
      }
    }
  }
}


