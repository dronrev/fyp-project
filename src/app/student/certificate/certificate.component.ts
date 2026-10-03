import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EditreportService } from '../report/editreport/editreport.service';
import { Report } from '../report/report.model';
import { ReportsService } from '../report/reports.service';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ImageService } from '../image.service';

@Component({
  standalone: false,
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor(private service : ReportsService, private service1 : EditreportService,private http : HttpClient) { }

  list:any;

  count :any;

  report: Report[] = [];


  myData= new Array();
  ngOnInit(): void {

    this.service.displayAll().subscribe(
      res=>{
        this.list = res;
        for(let item of this.list){
          this.service.countParticipants(item.report_id).subscribe(
            res1=>{
              this.myData.push(res1)
            }
          )
        }
      }
    );

    /*this.service1.getAllParticipants().subscribe(
      res=>{
        this.myData.length = this.list.length;
        this.count = res;
        for(let item of this.count){
          for(let item2 of this.list){
          }
        }

      }
    )*/
  }

  downloadCert(){
    this.http.get(`${environment.apiUrl}/e-cert/download-certificate`).subscribe(
      res=>{
      }
    )
    //this.download
  }


  downloadFolder() {
    this.http.get(`${environment.apiUrl}/e-cert/new-download`, { responseType: 'blob' })
    .subscribe(data => {
      const blob = new Blob([data], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'folder.zip';
      link.click();
      });
    }


}
