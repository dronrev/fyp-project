import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AnnouncementService } from '../announcement.service';

@Component({
  standalone: false,
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./announcement-form.component.css']
})
export class AnnouncementFormComponent implements OnInit {

  uploadForm: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder,private service : AnnouncementService,private alertcontrol : AlertController) {
    this.uploadForm = this.fb.group({
      id : ['']
    })
  }

  data = new UntypedFormGroup({
    'id' : new UntypedFormControl(localStorage.getItem('id')),
    'auth' : new UntypedFormControl(localStorage.getItem('auth')),
    'title' : new UntypedFormControl(""),
    'subject' : new UntypedFormControl(""),
    'message' : new UntypedFormControl(""),
    'date_created' : new UntypedFormControl(new Date().toISOString().split('T')[0])
  })
  test = new Date();

  ngOnInit(): void {
    var nextDate = new Date()
    nextDate.setDate(nextDate.getDate()+90)
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
    this.service.saveAnnouncementImage(formData).subscribe(
      res=>{
      }
    )
  }

}
