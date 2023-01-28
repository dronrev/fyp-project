import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ImageService } from 'src/app/student/image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
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
  myFile = new FormGroup({
    'report_id' : new FormControl(localStorage.getItem('ReportID'))
  })
  selectedImage?: FileList;
  //myFile = new FormControl('');
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor(private service : ImageService,private http : HttpClient,
    private alertController : AlertController
    ,private fb : FormBuilder) {
  }

  data_sent = this.fb.group({
    img : this.fb.array([]),
  }
)

  ngOnInit(): void {
    this.previewImage();
    //if(this.listOfImage.length === 0){this.check = true}
    console.log(this.listOfImage)
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
        console.log(e.target.result)
        this.listOfImage.push(e.target.result);
      }
      reader.readAsDataURL(file[i]);
    }
    console.log(this.selectedImage)
  }


  uploadImg(){
    this.setOfImage.append('report_id',this.myFile.value['report_id'])
    console.log(this.myFile.value['report_id'])
    this.service.uploadAttachment(this.setOfImage).subscribe(
      res=>{
        console.log(res)
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
    console.log(this.data_sent.value['img'])
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
