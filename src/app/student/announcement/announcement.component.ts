import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  Url = ""

  sendAnnouncement(announce:{title:string,content:string,message:string}){
    return this.http.post(this.Url,announce).subscribe(
      res=>{
              console.log(res);
      }
    )
  }
}
