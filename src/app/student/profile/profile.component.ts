import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../image.service';

@Component({
  standalone: false,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  baseUrl = `${environment.apiUrl}/user/update-profile.php`;
  name = localStorage.getItem('name');
  course = "HC00";
  email = localStorage.getItem('email_address');
  imageUrl : any;
  imageURL: any | undefined;
  myimg : any;
  uploadForm: UntypedFormGroup;
  defaultImg = "../assets/images/person-circle-outline.svg";
  myFile = new UntypedFormControl('');
  file_data : any ='';
  data = new UntypedFormGroup({
    'id' : new UntypedFormControl(localStorage.getItem('id'))
  })
  constructor(public fb: UntypedFormBuilder,private http : HttpClient,private service : ImageService,private sanitizer: DomSanitizer) {
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
    this.http.post(this.baseUrl,formData).subscribe(
      res=>{
      },
      err=>{
      }
    )
  }



}
