import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, FormControlName, UntypedFormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Announcement } from '../../announcement.model';
import { AnnouncementService } from '../../announcement.service';

@Component({
  standalone: false,
  selector: 'app-details',
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service : AnnouncementService) { }

  myitem !: Announcement [];

  send_data = new UntypedFormGroup({
    'announcement_id' : new UntypedFormControl(localStorage.getItem('_announcement_id_')),
    'title' : new UntypedFormControl(""),
    'subject' : new UntypedFormControl(""),
    'message' : new UntypedFormControl("")
  })

  ngOnInit(): void {
    this.service.getAllAnnouncement().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.announcement_id == localStorage.getItem('_announcement_id_'))))
    .subscribe(
      res=>{
        this.myitem = res;
      }
    )
  }

  saveEdit(){
    this.service.editAnnouncement(this.send_data.value).subscribe(
      res=>{
      }
    )
  }

}
