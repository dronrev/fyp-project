import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
import { AnnouncementService } from 'src/app/student/announcement/announcement.service';

@Component({
  standalone: false,
  selector: 'app-admin-announcement',
  templateUrl: './admin-announcement.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin-announcement.component.css']
})
export class AdminAnnouncementComponent implements OnInit {

  constructor(private service : AnnouncementService,private alertcontrol : AlertService) { }
  td!:number;
  announcements : any;
  myMessage :any;
  ngOnInit(): void {
    this.service.getFullAnnouncement().subscribe(
      res=>{
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
