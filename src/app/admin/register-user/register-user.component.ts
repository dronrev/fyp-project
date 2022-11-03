import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  lecturer = false;
  student = false;

  constructor() { }

  ngOnInit(): void {
  }
  onLecturer(){
    this.lecturer = true;
    this.student = false;
  }
  onStudent(){
    this.lecturer = false;
    this.student = true;
  }
}
