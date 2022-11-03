import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-lecturer-form',
  templateUrl: './lecturer-form.component.html',
  styleUrls: ['./lecturer-form.component.css']
})
export class LecturerFormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  addLecturer(lecturer:{name:string, passwd:string, email:string}){
    console.log(lecturer);
    this.http.post("http://localhost/fyp-project/lecturer/sendData.php",lecturer,{responseType: 'text'}).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}
