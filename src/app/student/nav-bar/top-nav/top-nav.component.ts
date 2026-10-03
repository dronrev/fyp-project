import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ImageService } from '../../image.service';


@Component({
  standalone: false,
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private service:AuthService, private activatedroute : ActivatedRoute,private img : ImageService) {
     if(this.activatedroute.firstChild){
      this.activatedroute.firstChild.data.subscribe(
        data=>{
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
  data = new UntypedFormGroup({
    'id' : new UntypedFormControl(localStorage.getItem('id'))
  })
  check = false;
  ngOnInit(): void {
    if(localStorage.getItem('_elorfostudent_') == "PMFKIKK"){
      this.check = true;
    }
    else if(localStorage.getItem('_elorfostudent_') == "PMFKIKK"){
      this.check = true;
    }

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
        //this.title = info;
      }
    )

  }
}
