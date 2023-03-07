import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.css']
})
export class AnnouncementFormComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(public fb: FormBuilder,private service : AnnouncementService,private alertcontrol : AlertController) {
    this.uploadForm = this.fb.group({
      id : ['']
    })
  }

  data = new FormGroup({
    'id' : new FormControl(localStorage.getItem('id')),
    'auth' : new FormControl(localStorage.getItem('auth')),
    'title' : new FormControl(""),
    'subject' : new FormControl(""),
    'message' : new FormControl(""),
    'date_created' : new FormControl(new Date().toISOString().split('T')[0])
  })
  test = new Date();

  ngOnInit(): void {
    var nextDate = new Date()
    nextDate.setDate(nextDate.getDate()+90)
    console.log(nextDate.toISOString().split('T')[0])
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
                 console.log(res);
                 this.uploadForm.patchValue({
                  id : JSON.parse(res).id
                });
                 this.saveImage();
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
  imageURL :any;
  file_data : any ='';
  sendImage(event : any){
    const file:FileList = event.target.files;
    const myFile = file[0];
    const reader = new FileReader();
    reader.readAsDataURL(myFile)
    reader.onload = () => {
      this.imageURL = reader.result;
    }
    this.file_data = myFile;
  }
  baseUrl = "";

  saveImage(){

    const formData = new FormData();
    formData.append('file',this.file_data)
    formData.append('myid',this.uploadForm.value['id']);
    console.log(this.file_data)
    this.service.saveAnnouncementImage(formData).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}
