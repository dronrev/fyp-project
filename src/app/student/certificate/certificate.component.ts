import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EditreportService } from '../report/editreport/editreport.service';
import { Report } from '../report/report.model';
import { ReportsService } from '../report/reports.service';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { FormGroup, FormControl } from '@angular/forms';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
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
        console.log(res);
        this.list = res;
        for(let item of this.list){
          this.service.countParticipants(item.report_id).subscribe(
            res1=>{
              console.log(res1)
              this.myData.push(res1)
              console.log(this.myData)
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
            if(item.report_id.substr(1,item.report_id.length-2) == item2.report_id)
            console.log("bro")
          }
        }

      }
    )*/
  }

  downloadCert(){
    this.http.get('http://localhost/fyp-project/e-cert/download-certificate.php').subscribe(
      res=>{
        console.log(res)
      }
    )
    //this.download
  }


  downloadFolder() {
    this.http.get('http://localhost/fyp-project/e-cert/new-download.php', { responseType: 'blob' })
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
