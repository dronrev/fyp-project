import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AnnouncementService } from 'src/app/student/announcement/announcement.service';

@Component({
  standalone: false,
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {

  constructor(private service : AnnouncementService) { }
  send_data = new UntypedFormGroup({
    'announcement_id' : new UntypedFormControl(localStorage.getItem('_announcement_id_')),
    'title' : new UntypedFormControl(""),
    'subject' : new UntypedFormControl(""),
    'message' : new UntypedFormControl(""),
    'date_created' : new UntypedFormControl(new Date().toISOString().split('T')[0])
  })

  list :any;


  ngOnInit(): void {
    this.service.getFullAnnouncement().pipe(map((data:any)=>data.filter((id:any)=>id.announcement_id == localStorage.getItem('_announcement_id_'))))
    .subscribe(
      res=>{
        this.list = res;
      }
    )
  }

  sendAnnouncement(){
    /*this.service.createNewAnnouncement(this.send_data.value).subscribe(
      res=>{
      }
    )*/
    this.service.editAnnouncement(this.send_data.value).subscribe(
      res=>{
      }
    )
  }
}
