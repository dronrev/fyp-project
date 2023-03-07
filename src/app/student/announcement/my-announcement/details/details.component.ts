import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Announcement } from '../../announcement.model';
import { AnnouncementService } from '../../announcement.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service : AnnouncementService) { }

  myitem !: Announcement [];

  send_data = new FormGroup({
    'announcement_id' : new FormControl(localStorage.getItem('_announcement_id_')),
    'title' : new FormControl(""),
    'subject' : new FormControl(""),
    'message' : new FormControl("")
  })

  ngOnInit(): void {
    this.service.getAllAnnouncement().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.announcement_id == localStorage.getItem('_announcement_id_'))))
    .subscribe(
      res=>{
        console.log(res)
        this.myitem = res;
      }
    )
  }

  saveEdit(){
    console.log(this.send_data.value)
    this.service.editAnnouncement(this.send_data.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}
