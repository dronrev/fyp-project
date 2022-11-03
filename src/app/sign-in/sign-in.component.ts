import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router,private service:AuthService) { }
  messageClass = "" ;
  message = "";
  userId:any;
  editdata:any;
  responseData:any;
  @Input()
  public yourName!: string;
  enterPage = new FormGroup({
    email_address : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required)
  })

  ngOnInit(): void {
    localStorage.clear();
  }

  Login(){
    if(this.enterPage.valid){
      this.service.proceedLogin(this.enterPage.value).subscribe(res=>{
        if(res != null){
          console.log(res);
          this.responseData = JSON.parse(res);
          if(this.responseData.token == undefined){
            alert("Wrong Email or Password!");
            this.router.navigate(['MainPage']);
          }
          else{
            localStorage.setItem('token',this.responseData.token);
            this.router.navigate(['']);
            this.service.changeName(this.responseData.name);
          }
        }
      })
    }
  }

  proceedLogin(name:any,role:any){
    localStorage.setItem("username",name);
    localStorage.setItem("role",role);
    this.router.navigate([""])
  }
}
