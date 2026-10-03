import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../image.service';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
