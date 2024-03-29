import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  baseUrl = "http://localhost/fyp-project/user/update-profile.php";
  name = localStorage.getItem('name');
  course = "HC00";
  email = localStorage.getItem('email_address');
  imageUrl : any;
  imageURL: any | undefined;
  myimg : any;
  uploadForm: FormGroup;
  defaultImg = "../assets/images/person-circle-outline.svg";
  myFile = new FormControl('');
  file_data : any ='';
  data = new FormGroup({
    'id' : new FormControl(localStorage.getItem('id'))
  })
  constructor(public fb: FormBuilder,private http : HttpClient,private service : ImageService,private sanitizer: DomSanitizer) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: [''],
      id : ['']
    })
  }

  ngOnInit(): void {
    this.service.getProfile(this.data.value).subscribe(
      (res)=>{
        console.log(JSON.parse(res))
        this.imageUrl = JSON.parse(res)
        this.imageURL = '../assets/images/profile-picture/'+this.imageUrl[0].profilepic;
      }
    )


   }

  // Image Preview
  showPreview(event:any) {
    const file:FileList = event.target.files;
    const thedate = new Date().toISOString();
    const myFile = file[0];
    this.uploadForm.patchValue({
      avatar: myFile,
      //mydate: thedate,
      name: file[0].name,
      id : localStorage.getItem('id')
    });
    console.log(this.uploadForm.value);
    // File Preview
    const reader = new FileReader();
    reader.readAsDataURL(myFile);
    reader.onload = () => {
      this.imageURL = reader.result;
    }
    this.file_data = myFile;
  }

  // Submit Form
  submit() {

    const formData = new FormData();
    formData.append('file',this.file_data)
    formData.append('yourname',this.uploadForm.value['id'])
    console.log(this.uploadForm.value)
    this.http.post(this.baseUrl,formData).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }



}
