import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.css']
})
export class AnnouncementFormComponent implements OnInit {

  constructor(private service : AnnouncementService,private alertcontrol : AlertController) { }

  data = new FormGroup({
    'id' : new FormControl(localStorage.getItem('id')),
    'title' : new FormControl(""),
    'content' : new FormControl(""),
    'message' : new FormControl("")
  })

  ngOnInit(): void {
  }

  async sendData(){
    //console.log(this.data.value);
    const alert = await this.alertcontrol.create({
      header : "New Announcement",
      buttons : [
        {
          text : 'Ok',
          handler: () =>{
            this.service.createNewAnnouncement(this.data.value).subscribe(
              (res:any)=>{
                 console.log(res)
               }
             )
          }
        },
        {
          text : 'Cancel'
        }
      ]
    })
    await alert.present();
  }

}
