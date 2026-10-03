import { environment } from 'src/environments/environment';
import { Attribute, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  standalone: false,
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  @ViewChild('myForm')
  signUpForm!: NgForm;
  registerUser! : UntypedFormGroup;
  constructor(private http:HttpClient,private alertcontrol : AlertController) { }
  programmes_list = ["","UH6481001 / HC00","UH6481002 / HC05",
   "UH6481003 / HC12", "UH6481004 / HC13","HC14"]

  ngOnInit(): void {
    this.registerUser = new UntypedFormGroup({
      'name' : new UntypedFormControl(null, Validators.required),
      'mat_number' : new UntypedFormControl(null,Validators.required),
      'email' : new UntypedFormControl(null,[(Validators.required),(Validators.email)]),
      'passwd' : new UntypedFormControl(null,Validators.required),
      'confirmpass' : new UntypedFormControl(null,Validators.required),
      'course_code' : new UntypedFormControl(null,Validators.required),
      'role' : new UntypedFormControl("student")
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
    this.http.post(`${environment.apiUrl}/user/pending-user`,this.registerUser.value,{responseType : 'text'}).subscribe(
      res=>{
        this.userRegistered(JSON.parse(res).message);
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
  async userRegistered(data:any){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : data,
      buttons : ['Continue']
    });
    await messages.present();
  }

}
