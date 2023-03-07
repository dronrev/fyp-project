import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EventsService } from 'src/app/student/event/events.service';

@Component({
  selector: 'app-list-of-event-admin',
  templateUrl: './list-of-event-admin.component.html',
  styleUrls: ['./list-of-event-admin.component.css']
})
export class ListOfEventAdminComponent implements OnInit {
  list: any;

  TabHeaders = ["#","Title","Activity ID",""];

  constructor(private service : EventsService,private alertcontrol : AlertController) { }

  ngOnInit(): void {
    this.service.displayEvent().subscribe(
      res=>{
        this.list = res;
      }
    );
  }

  deleteItem(data:any){
    this.service.deleteEvent(data).subscribe(
      res=>{
        this.notify();
      }
    )
  }
  async notify(){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : 'Event has been deleted!',
      buttons : [{text:'Continue',handler:()=>{location.reload()}}]
    });
    await messages.present();
  }
}
