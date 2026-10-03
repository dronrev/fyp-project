import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  standalone: false,
  selector: 'app-lecturer-form',
  templateUrl: './lecturer-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lecturer-form.component.css']
})
export class LecturerFormComponent implements OnInit {

  constructor(private http:HttpClient,private alertcontrol : AlertController) { }

  ngOnInit(): void {
  }

  myForm = new UntypedFormGroup({
    'name' : new UntypedFormControl(),
    'passwd' : new UntypedFormControl(),
    'email' : new UntypedFormControl("",Validators.email),
    'role' : new UntypedFormControl()
  })

  message :any;
//lecturer:{name:string, passwd:string, email:string, role : string}
  addLecturer(){
    if(!this.myForm.valid){
      alert("WOI ISI SEMUA FORM");
      return}

    this.http.post(`${environment.apiUrl}/lecturer/sendData.php`,this.myForm.value,{responseType: 'text'}).subscribe(
      res=>{
        this.message = res;
        this.notify(this.message);
      }
    )
  }


  async notify(serviceMessage:any){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : serviceMessage,
      buttons : ['Continue']
    });
    await messages.present();
  }
}
