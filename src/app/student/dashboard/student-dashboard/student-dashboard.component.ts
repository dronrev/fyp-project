import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DropzoneFile } from "dropzone";

@Component({
  standalone: false,
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  myDoc(){

  }
}
