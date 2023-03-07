import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ImageService } from '../../image.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private service:AuthService, private activatedroute : ActivatedRoute,private img : ImageService) {
     if(this.activatedroute.firstChild){
      this.activatedroute.firstChild.data.subscribe(
        data=>{
          console.log(data)
          this.title = data;
        }
      )
    }


   }
  imageURL: string | undefined;
  defaultImg = "../assets/images/default-image.jpg";
  name:any;
  test = localStorage.getItem('name');
  title? : any;
  data = new FormGroup({
    'id' : new FormControl(localStorage.getItem('id'))
  })
  ngOnInit(): void {

    this.img.getProfile(this.data.value).subscribe(
      res=>{
        this.imageURL = '../assets/images/profile-picture/'+JSON.parse(res)[0].profilepic;
      }
    )


    this.service.currentName.subscribe(res=>{
      this.name = res;
    })

    this.activatedroute.data.subscribe(
      info=>{
        console.log('oi');
        //this.title = info;
        console.log(info)
      }
    )

  }
}
