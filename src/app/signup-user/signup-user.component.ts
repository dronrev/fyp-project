import { Attribute, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  @ViewChild('myForm')
  signUpForm!: NgForm;
  registerUser! : FormGroup;
  constructor(private http:HttpClient) { }
  genders = ['Male','Female'];

  ngOnInit(): void {
    this.registerUser = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'password' : new FormControl(null,Validators.required)
    });
  }

  onPostData(postData: {fullname: string; password: string}){
    let header = new Headers();
    this.http.post(
      'https://ng-fyp-project-default-rtdb.firebaseio.com/posts.json',
       postData).subscribe(responseData =>(
        console.log(responseData)
       ));
  }

}
