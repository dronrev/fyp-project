import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  constructor() { }

 // token = localStorage.getItem('token')

  private tokenExpired(token:any){
    if(!token){
      return false;
    }
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now()
  }

  ngOnInit(): void {
    if(this.tokenExpired(localStorage.getItem('token'))){
    }
    else{
    }
  }

}
