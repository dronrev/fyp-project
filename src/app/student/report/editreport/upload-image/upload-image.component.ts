import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ImageService } from 'src/app/student/image.service';

@Component({
  standalone: false,
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  listSrc = "/assets/images/report-attachment/r463b988b705ae5/abomasnow.png";

  isModalOpen = false;
  report_id = localStorage.getItem('GetreportID');
  imageURL: string | undefined;
  listOfImage:any = [];
  check = false;
  setOfImage = new FormData();
  myFile = new UntypedFormGroup({
    'report_id' : new UntypedFormControl(localStorage.getItem('ReportID'))
  })
  selectedImage?: FileList;
  //myFile = new UntypedFormControl('');
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor(private service : ImageService,private http : HttpClient,
    private alertController : AlertController
    ,private fb : UntypedFormBuilder) {
  }

  data_sent = this.fb.group({
    img : this.fb.array([]),
  }
)

  ngOnInit(): void {
    this.previewImage();
    //if(this.listOfImage.length === 0){this.check = true}
  }

  uploadImage(event:any){

    const file:FileList = event.target.files;
    const image = file[0];
    this.selectedImage = file;
    //console.log(file)

    this.check = false;

    for (let i = 0; i < file.length; i++) {
      this.setOfImage.append('image[]',this.selectedImage[i])
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.imageURL = reader.result as string;
        this.listOfImage.push(e.target.result);
      }
      reader.readAsDataURL(file[i]);
    }
  }


  uploadImg(){
    this.setOfImage.append('report_id',this.myFile.value['report_id'])
    this.service.uploadAttachment(this.setOfImage).subscribe(
      res=>{
        this.saveImg();
      }
    )
  }
  checking: boolean = false;

  deleteImg(event:any,data:any){
    this.checking = true;
    let info = {file_name : data, report_id : localStorage.getItem('ReportID')};
    if(event.detail.checked){
      this.data_sent.value['img'].push(info);
    }
    else{
      this.check = false;
      //this.myList.pop();
      for(let i  = 0 ; i<this.data_sent.value['img'].length;i++){
        if(data == this.data_sent.value['img'][i]){
          this.data_sent.value['img'].splice(i,1);
          break;
        }
      }
    }
  }

  async saveImg(){
    const alert = await this.alertController.create({
      header : 'Save Image',
      message : 'Image has been uploaded!',
      buttons : ['Continue']
    })
    await alert.present();
  }

  previewImage(){
    //const bro = "assets/images/report-attachment/" + localStorage.getItem('ReportID');
    //console.log(bro);
    this.http.post(`${environment.apiUrl}/report/get-attachment.php`,localStorage.getItem('ReportID'),{responseType : 'text'}).subscribe(
      res=>{
        for(var item of JSON.parse(res)){
            this.listOfImage.push("../assets/images/report-attachment/"+localStorage.getItem('ReportID')+'/'+item)
        }
      }
    )
  }

}
