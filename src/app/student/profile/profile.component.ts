import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  baseUrl = "http://localhost/fyp-project/user/update-profile.php";
  name = localStorage.getItem('name');
  course = "HC00";
  email = "vernordmusran27@gmail.com"
  imageURL: string | undefined;
  uploadForm: FormGroup;
  defaultImg = "../assets/images/person-circle-outline.svg";
  myFile = new FormControl('');
  file_data : any ='';
  constructor(public fb: FormBuilder,private http : HttpClient) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: [''],
      mydate: ['']
    })
  }
  ngOnInit(): void { }

  // Image Preview
  showPreview(event:any) {
    const file:FileList = event.target.files;
    const thedate = new Date().toISOString();
    const myFile = file[0];
    this.uploadForm.patchValue({
      avatar: file,
      mydate: thedate,
      name: file
    });
    console.log(this.uploadForm.value);
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(myFile)
  }

  // Submit Form
  submit() {

    let formData = new FormData();
    let info = {id : 2,name :'raja'}
    formData.append('id','2');
    formData.append('tz', new Date().toISOString());
    formData.append('name','myguy');
    this.file_data= formData;
    console.log(this.file_data)

    console.log(this.uploadForm.value);
    this.http.post(this.baseUrl,formData).subscribe(
      res=>{
        console.log(res)
      }
    )
  }



}
