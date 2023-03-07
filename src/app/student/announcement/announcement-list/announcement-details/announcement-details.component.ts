import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Announcement } from '../../announcement.model';
import { AnnouncementService } from '../../announcement.service';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {

  constructor(private service : AnnouncementService) { }
  myitem !: Announcement [];
  imageURL = "../assets/images/announcement/";
  ngOnInit(): void {
    this.service.getAllAnnouncement().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.announcement_id == localStorage.getItem('AnnouncementID'))))
    .subscribe(
      res=>{
        console.log(res)
        this.myitem = res;
        if(this.myitem.length == 0){
          this.service.getAllAdminAnnouncement().pipe(map((data:any)=>data.filter(
            (myData:any)=>myData.announcement_id == localStorage.getItem('AnnouncementID')))).subscribe(
            (res:any)=>{
              //this.myitem = JSON.parse(res);
              this.myitem = res;
              console.log(res)
            }
          )
        }
      }
    )
    this.service.getAnnouncementImage(localStorage.getItem('AnnouncementID')).subscribe(
      res=>{
        this.imageURL = this.imageURL + JSON.parse(res)[0].attachment;
      }
    )
  }

}
