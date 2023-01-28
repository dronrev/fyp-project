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
  ngOnInit(): void {
    this.service.getAllAnnouncement().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.announcement_id == localStorage.getItem('AnnouncementID'))))
    .subscribe(
      res=>{
        console.log(res)
        this.myitem = res;
      }
    )
  }

}
