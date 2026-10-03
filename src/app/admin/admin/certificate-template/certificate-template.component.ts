import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-certificate-template',
  templateUrl: './certificate-template.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./certificate-template.component.css']
})
export class CertificateTemplateComponent implements OnInit {

  uploadImage : UntypedFormGroup
  imageURL :any;
  constructor(private fb : UntypedFormBuilder) {
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
    const reader = new FileReader();
    reader.readAsDataURL(myfile)
    reader.onload = () => {
      this.imageURL = reader.result
    }
  }

}
