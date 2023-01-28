import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lect-report-attachment',
  templateUrl: './lect-report-attachment.component.html',
  styleUrls: ['./lect-report-attachment.component.css']
})
export class LectReportAttachmentComponent implements OnInit {

  listOfImage:any = [];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.post("http://localhost/fyp-project/report/get-attachment.php",localStorage.getItem('ReportID'),{responseType : 'text'}).subscribe(
      res=>{
        console.log(JSON.parse(res))
        for(var item of JSON.parse(res)){
          console.log(item)
            this.listOfImage.push("../assets/images/report-attachment/"+localStorage.getItem('ReportID')+'/'+item)
        }
      }
    )
  }

}
