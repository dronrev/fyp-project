import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ReportsService } from 'src/app/student/report/reports.service';

@Component({
  selector: 'app-list-of-report-admin',
  templateUrl: './list-of-report-admin.component.html',
  styleUrls: ['./list-of-report-admin.component.css']
})
export class ListOfReportAdminComponent implements OnInit {
  list: any;

  TabHeaders = ["#","Title","Activity ID",""];

  constructor(private service : ReportsService,private alertcontrol : AlertController) { }

  ngOnInit(): void {
    this.service.displayAll().subscribe(
      res=>{
        console.log(res);
        this.list = res;
      }
    );
  }

  deleteItem(data:any){
    this.service.deleteReport(data).subscribe(
      res=>{
        this.notify();
      }
    )
  }
  async notify(){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : 'Report has been deleted!',
      buttons : [{text:'Continue',handler:()=>{location.reload()}}]
    });
    await messages.present();
  }

}
