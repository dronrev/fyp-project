import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from 'src/app/admin/users.service';

@Component({
  standalone: false,
  selector: 'app-lect-list-of-student',
  templateUrl: './lect-list-of-student.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-list-of-student.component.css']
})
export class LectListOfStudentComponent implements OnInit {

  students:any;
  constructor(private service : UsersService) { }

  ngOnInit(): void {

    this.service.fetchStudent().subscribe(
      res=>{
        this.students = res;
      }
    );
  }

}
