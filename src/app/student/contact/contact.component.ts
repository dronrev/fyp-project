import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service : ImageService,private sanitizer: DomSanitizer) { }

  imageUrl = "";
  uploadImg = "../assets/images/cloud-upload-outline.svg";
  data = localStorage.getItem('id')
  imageURL: any | undefined;
  myimg : any;
  ngOnInit(): void {


  }

}
