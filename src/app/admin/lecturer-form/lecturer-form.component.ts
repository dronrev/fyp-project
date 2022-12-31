import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-lecturer-form',
  templateUrl: './lecturer-form.component.html',
  styleUrls: ['./lecturer-form.component.css']
})
export class LecturerFormComponent implements OnInit {

  constructor(private http:HttpClient,private alertcontrol : AlertController) { }

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    'name' : new FormControl(),
    'passwd' : new FormControl(),
    'email' : new FormControl("",Validators.email),
    'role' : new FormControl()
  })

  message :any;
//lecturer:{name:string, passwd:string, email:string, role : string}
  addLecturer(){
    if(!this.myForm.valid){
      alert("WOI ISI SEMUA FORM");
      return}

    console.log(this.myForm);
    this.http.post("http://localhost/fyp-project/lecturer/sendData.php",this.myForm.value,{responseType: 'text'}).subscribe(
      res=>{
        console.log(res);
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
