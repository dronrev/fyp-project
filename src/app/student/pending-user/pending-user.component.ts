import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent implements OnInit {

  constructor(private http : HttpClient,private alertcontrol : AlertController) { }

  list : any;
  student_data : any;

  ngOnInit(): void {
    this.http.get("http://localhost/fyp-project/pending/get-pending.php",{responseType : 'text'}).subscribe(
      res=>{
        //console.log(res)
        this.list = JSON.parse(res)
        //console.log(this.list)
      }
    )
  }

  approveMember(data : any){
    //console.log(data)
    let myForm = new FormGroup({
      'name' : new FormControl(data.username),
      'passwd' : new FormControl(data.password),
      'email' : new FormControl(data.email_id),
      'mat_number' : new FormControl(data.user_id),
      'course_code' : new FormControl(data.course_id),
      'role' : new FormControl(data.user_role)

    })
    console.log(myForm.value)
    this.http.post("http://localhost/fyp-project/send-data.php",myForm.value,{responseType : 'text'}).subscribe(
      res=>{
        console.log(res)
        this.http.post("http://localhost/fyp-project/pending/approve-pending.php",myForm.value['mat_number'],{responseType : 'text'}).subscribe(
          res1=>{
            console.log(res1);
            this.notify(JSON.parse(res1).message);
          }
        )
      }
    )
  }

  deleteMember(data:any){
    this.http.post("http://localhost/fyp-project/pending/delete-pending.php",data.user_id,{responseType : 'text'}).subscribe(
      res=>{
        console.log(res)
        this.notify(JSON.parse(res).message)
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
