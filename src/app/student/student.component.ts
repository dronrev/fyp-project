import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router : Router) { }

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
      //alert("Anjing");
      //this.router.navigate(['login']);
    }
  }

}
