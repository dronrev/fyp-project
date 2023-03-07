import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { Announcement } from '../announcement.model';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {

  a !: number;
  list:any;
  myitem !: Announcement [];
  noItem = "You have no announcement";
  composer: any;
  searchText : any;
  constructor(private service : AnnouncementService) { }

  ngOnInit(): void {
    this.service.getAllAdminAnnouncement().subscribe(
      (res:any)=>{
        //this.myitem = JSON.parse(res);
        this.list = res;
        this.myitem = res;
        this.service.getAllAnnouncement().subscribe(
          (res:any)=>{
            //this.myitem = JSON.parse(res);
            for(let item of res){
              this.list.push(item)
              //this.myitem.push(item)
            }
            //this.list.push(res);
            console.log(this.list)
          }
        )
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
