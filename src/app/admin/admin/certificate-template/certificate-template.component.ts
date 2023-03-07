import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-certificate-template',
  templateUrl: './certificate-template.component.html',
  styleUrls: ['./certificate-template.component.css']
})
export class CertificateTemplateComponent implements OnInit {

  uploadImage : FormGroup
  imageURL :any;
  constructor(private fb : FormBuilder) {
    this.uploadImage = this.fb.group({
      avatar : [''],
      name : [''],
      id : ['']
    });
   }

  ngOnInit(): void {
  }

  showImage(event:any){
    const file : FileList = event.target.files;
    const myfile = file[0];
    this.uploadImage.patchValue({
      avatar : myfile,
      name : file[0].name,
      id : 'cert'
    });
    console.log(this.uploadImage.value);
    const reader = new FileReader();
    reader.readAsDataURL(myfile)
    reader.onload = () => {
      this.imageURL = reader.result
    }
  }

}
