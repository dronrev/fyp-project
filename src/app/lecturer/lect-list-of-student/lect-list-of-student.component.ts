import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/admin/users.service';

@Component({
  selector: 'app-lect-list-of-student',
  templateUrl: './lect-list-of-student.component.html',
  styleUrls: ['./lect-list-of-student.component.css']
})
export class LectListOfStudentComponent implements OnInit {

  students:any;
  constructor(private service : UsersService) { }

  ngOnInit(): void {

    this.service.fetchStudent().subscribe(
      res=>{
        console.log(res);
        this.students = res;
      }
    );
  }

}
