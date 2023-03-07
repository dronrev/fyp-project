import { Attribute, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  @ViewChild('myForm')
  signUpForm!: NgForm;
  registerUser! : FormGroup;
  constructor(private http:HttpClient,private alertcontrol : AlertController) { }
  programmes_list = ["","UH6481001 / HC00","UH6481002 / HC05",
   "UH6481003 / HC12", "UH6481004 / HC13","HC14"]

  ngOnInit(): void {
    this.registerUser = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'mat_number' : new FormControl(null,Validators.required),
      'email' : new FormControl(null,[(Validators.required),(Validators.email)]),
      'passwd' : new FormControl(null,Validators.required),
      'confirmpass' : new FormControl(null,Validators.required),
      'course_code' : new FormControl(null,Validators.required),
      'role' : new FormControl("student")
    });
    //console.log(this.registerUser.valid)
  }

  sendData(){
    //console.log(this.registerUser.value)
    if(!this.registerUser.valid){
      this.notify();
      return;
    }
    if(this.registerUser.value['passwd'] != this.registerUser.value['confirmpass']){
      this.wrongPass();
      return;
    }
    this.http.post("http://localhost/fyp-project/user/pending-user.php",this.registerUser.value,{responseType : 'text'}).subscribe(
      res=>{
        console.log(res);
      }
    )
  }
  async notify(){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : 'Please fill all the forms!',
      buttons : ['Continue']
    });
    await messages.present();
  }
  async wrongPass(){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : 'Password did not match',
      buttons : ['Continue']
    });
    await messages.present();
  }

}
