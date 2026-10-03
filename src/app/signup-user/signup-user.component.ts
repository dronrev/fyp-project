import { Group, GroupService } from 'src/app/shared/group.service';
import { inject } from '@angular/core';
import { APP_NAME, ROLE } from 'src/app/shared/app-config';
import { environment } from 'src/environments/environment';
import { Attribute, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';


@Component({
  standalone: false,
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  private groupService = inject(GroupService);
  groups: Group[] = [];
  appName = APP_NAME;
  @ViewChild('myForm')
  signUpForm!: NgForm;
  registerUser! : UntypedFormGroup;
  constructor(private http:HttpClient,private alertcontrol : AlertService) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(
      groups=>{
        this.groups = groups;
      }
    )
    this.registerUser = new UntypedFormGroup({
      'name' : new UntypedFormControl(null, Validators.required),
      'mat_number' : new UntypedFormControl(null,Validators.required),
      'email' : new UntypedFormControl(null,[(Validators.required),(Validators.email)]),
      'passwd' : new UntypedFormControl(null,Validators.required),
      'confirmpass' : new UntypedFormControl(null,Validators.required),
      'course_code' : new UntypedFormControl(null,Validators.required),
      'group_id' : new UntypedFormControl(null,Validators.required),
      'role' : new UntypedFormControl(ROLE.member)
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
