import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
