import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-student',
  templateUrl: './student.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router : Router) { }

  private tokenExpired(token:any){
    if(!token){
      return false;
    }
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 360000 > Date.now()
  }
  ngOnInit(): void {

    if(!this.tokenExpired(localStorage.getItem('token'))){
      alert("Your session is expired!");
      this.router.navigate(['sign-in']);
    }
  }

}
