import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';
import { UsersService } from 'src/app/admin/users.service';
import { AnnouncementService } from 'src/app/student/announcement/announcement.service';

@Component({
  standalone: false,
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {

  constructor(private service : AnnouncementService,private service1 : UsersService,private alertcontrol : AlertService) { }

  send_data = new UntypedFormGroup({
    'auth' : new UntypedFormControl(localStorage.getItem('portal')),
    'id' : new UntypedFormControl('Admin'),
    'title' : new UntypedFormControl(""),
    'subject' : new UntypedFormControl(""),
    'message' : new UntypedFormControl(""),
    'date_created' : new UntypedFormControl(new Date().toISOString().split('T')[0])
  })
  info = new UntypedFormGroup({
    'email_id' : new UntypedFormControl(""),
    'username' : new UntypedFormControl("")
  })

  listStudent : any;

  ngOnInit(): void {
    this.service1.fetchMembers().subscribe(
      res=>{
        this.listStudent = res
      }
    )
  }

  sendAnnouncement(){
    this.service.createNewAnnouncement(this.send_data.value).subscribe(
      res=>{
        this.notify(JSON.parse(res).message)
        for(let item of this.listStudent){
          this.info.value.email_id = item.email_id;
          this.info.value.username = item.username;
          this.service.emailAnnouncement(this.info.value).subscribe(
            res1=>{
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
