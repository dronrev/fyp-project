import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AnnouncementService } from 'src/app/student/announcement/announcement.service';

@Component({
  selector: 'app-admin-announcement',
  templateUrl: './admin-announcement.component.html',
  styleUrls: ['./admin-announcement.component.css']
})
export class AdminAnnouncementComponent implements OnInit {

  constructor(private service : AnnouncementService,private alertcontrol : AlertController) { }
  td!:number;
  announcements : any;
  myMessage :any;
  ngOnInit(): void {
    this.service.getFullAnnouncement().subscribe(
      res=>{
        console.log(res)
        this.announcements = res;
      }
    )
  }
  setAnnouncementId(data:any){
    localStorage.setItem('_announcement_id_',data)
  }

  deleteItem(data:any){
    this.service.deleteAnnounce(data).subscribe(
      res=>{
        console.log(res)
        this.myMessage = JSON.parse(res)
        this.notify(this.myMessage.message)
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
