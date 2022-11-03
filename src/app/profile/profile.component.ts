import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  name = "Vernord Musran";
  course = "HC00";
  email = "vernordmusran27@gmail.com"
  ngOnInit(): void {
  }

}
