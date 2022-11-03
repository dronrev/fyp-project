import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private service:AuthService) { }
  name:any;
  test = localStorage.getItem('name');
  ngOnInit(): void {
    this.service.currentName.subscribe(res=>{
      this.name = res;
    })
  }
}
