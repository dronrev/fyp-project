import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  //students: any;
  //regStu!: User;
  //data: any;

  constructor(private http : HttpClient, private userservice : UsersService) { }

  baseurl = "http://localhost/fyp-project/send-data.php";

  orang : User [] = []
  error = '';
  success = '';

  ngOnInit(): void {
    //this.userservice.getStudents().subscribe(
     // (result:any)=>{
      //  this.students = result.data;
   // }
   // )
  }


  sendUser(student:{name:string , mat_number:string, passwd:string, email:string}){
    //let body = JSON.stringify(student);
    this.http.post(this.baseurl, student, {responseType: 'text'}).subscribe(
      res=>{
      console.log(res);
    })
  }
}
