import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UsersService } from 'src/app/admin/users.service';
import { AnnouncementService } from 'src/app/student/announcement/announcement.service';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {

  constructor(private service : AnnouncementService,private service1 : UsersService,private alertcontrol : AlertController) { }

  send_data = new FormGroup({
    'auth' : new FormControl(localStorage.getItem('auth')),
    'id' : new FormControl('Admin'),
    'title' : new FormControl(""),
    'subject' : new FormControl(""),
    'message' : new FormControl(""),
    'date_created' : new FormControl(new Date().toISOString().split('T')[0])
  })
  info = new FormGroup({
    'email_id' : new FormControl(""),
    'username' : new FormControl("")
  })

  listStudent : any;

  ngOnInit(): void {
    this.service1.fetchStudent().subscribe(
      res=>{
        this.listStudent = res
      }
    )
    console.log(this.send_data.value)
  }

  sendAnnouncement(){
    this.service.createNewAnnouncement(this.send_data.value).subscribe(
      res=>{
        console.log(res)
        this.notify(JSON.parse(res).message)
        for(let item of this.listStudent){
          this.info.value.email_id = item.email_id;
          this.info.value.username = item.username;
          this.service.emailAnnouncement(this.info.value).subscribe(
            res1=>{
              console.log(res1)
            }
          )
        }
      }
    )
  }
  async notify(serviceMessage:any){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : serviceMessage,
      buttons : [{text :'Continue',handler:()=>location.reload()}]
    });
    await messages.present();
  }

}
