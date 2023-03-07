import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  //students: any;
  //regStu!: User;
  //data: any;

  constructor(private http : HttpClient,
     private userservice : UsersService,
     private alertcontrol : AlertController) { }

  baseurl = "http://localhost/fyp-project/send-data.php";

  orang : User [] = []
  error = '';
  success = '';

  programmes_list = ["","UH6481001 / HC00","UH6481002 / HC05",
   "UH6481003 / HC12", "UH6481004 / HC13","HC14"]

  ngOnInit(): void {
  }


  sendUser(student:{name:string , mat_number:string, passwd:string, email:string,role:string}){
    //let body = JSON.stringify(student);
    this.http.post(this.baseurl, student, {responseType: 'text'}).subscribe(
      res=>{
      //console.log(res);

      this.notify(JSON.parse(res).message);
    })
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
