import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
import { map } from 'rxjs/operators';
import { AnnouncementService } from '../announcement.service';

@Component({
  standalone: false,
  selector: 'app-my-announcement',
  templateUrl: './my-announcement.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./my-announcement.component.css']
})
export class MyAnnouncementComponent implements OnInit {

  constructor(private service : AnnouncementService, private alertcontrol : AlertService) { }

  list :any

  ngOnInit(): void {
    this.service.getAllAnnouncement().pipe(map((data:any)=>data.filter(((announce:any)=>announce.user_id == localStorage.getItem('id')))))
    .subscribe(
      res=>{
        this.list = res;
      }
    )
  }

  editAnnouncement(data : any){
    localStorage.setItem('_announcement_id_',data);
  }
  deleteAnnouncement(data:any){
    this.service.deleteAnnounce(data).subscribe(
      res=>{
        this.notify(JSON.parse(res).message)
      }
    )
  }


  async notify(data:any){
    const alert = await this.alertcontrol.create({
      header:'Announcement update',
      message : data,
      buttons : ['Continue']
    });
    await alert.present();
  }

}
