import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AnnouncementService } from 'src/app/student/announcement/announcement.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {

  constructor(private service : AnnouncementService) { }
  send_data = new FormGroup({
    'announcement_id' : new FormControl(localStorage.getItem('_announcement_id_')),
    'title' : new FormControl(""),
    'subject' : new FormControl(""),
    'message' : new FormControl(""),
    'date_created' : new FormControl(new Date().toISOString().split('T')[0])
  })

  list :any;


  ngOnInit(): void {
    console.log(this.send_data.value)
    this.service.getFullAnnouncement().pipe(map((data:any)=>data.filter((id:any)=>id.announcement_id == localStorage.getItem('_announcement_id_'))))
    .subscribe(
      res=>{
        console.log(res)
        this.list = res;
      }
    )
  }

  sendAnnouncement(){
    /*this.service.createNewAnnouncement(this.send_data.value).subscribe(
      res=>{
        console.log(res)
      }
    )*/
    this.service.editAnnouncement(this.send_data.value).subscribe(
      res=>{
        console.log(res)
      }
    )
    console.log(this.send_data.value)
  }
}
