import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  constructor() { }

 // token = localStorage.getItem('token')

  private tokenExpired(token:any){
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    console.log(expiry * 1000 > Date.now())
    return expiry * 1000 > Date.now()
  }

  ngOnInit(): void {
    if(this.tokenExpired(localStorage.getItem('token'))){
      console.log("woi");
    }
    else{
      console.log("Woi");
    }
  }

}
