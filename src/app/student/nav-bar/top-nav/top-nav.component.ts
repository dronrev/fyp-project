import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private service:AuthService, private activatedroute : ActivatedRoute) {

   }
  imageURL: string | undefined;
  defaultImg = "../assets/images/person-circle-outline.svg";
  name:any;
  test = localStorage.getItem('name');
  title? : any;
  ngOnInit(): void {
    this.service.currentName.subscribe(res=>{
      this.name = res;
    })

    this.activatedroute.data.subscribe(
      data=>{
        console.log('oi');
        this.title = data;
        console.log(data)
      }
    )
  }
}
