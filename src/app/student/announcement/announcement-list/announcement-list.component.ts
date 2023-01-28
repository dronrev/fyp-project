import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { Announcement } from '../announcement.model';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {

  list:any;
  myitem !: Announcement [];
  noItem = "You have no announcement";

  constructor(private service : AnnouncementService) { }

  ngOnInit(): void {
    this.service.getAllAnnouncement().subscribe(
      (res:any)=>{
        //this.myitem = JSON.parse(res);
        this.list = res;
        this.myitem = res;
        console.log(this.list)
        console.log(new Date())
      }
    )
  }

  getAnnouncement(data : any){
    var announcement_id = JSON.stringify(this.myitem[data].announcement_id)
    //console.log(announcement_id);
    if(this.myitem[data].announcement_id == undefined){
      console.log("notFound");
    }
    else{
      console.log("Found");
      console.log(this.myitem[data].announcement_id);
      this.service.setCurrentAnnouncement(this.myitem[data].announcement_id);
      localStorage.setItem("announcementID",announcement_id);
      localStorage.setItem("AnnouncementID",this.service.getCurrentAnnouncement());
    }
  }
}
