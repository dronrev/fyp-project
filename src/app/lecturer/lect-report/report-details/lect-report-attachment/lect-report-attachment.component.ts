import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lect-report-attachment',
  templateUrl: './lect-report-attachment.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-report-attachment.component.css']
})
export class LectReportAttachmentComponent implements OnInit {

  listOfImage:any = [];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.post(`${environment.apiUrl}/report/get-attachment.php`,localStorage.getItem('ReportID'),{responseType : 'text'}).subscribe(
      res=>{
        for(var item of JSON.parse(res)){
            this.listOfImage.push("../assets/images/report-attachment/"+localStorage.getItem('ReportID')+'/'+item)
        }
      }
    )
  }

}
