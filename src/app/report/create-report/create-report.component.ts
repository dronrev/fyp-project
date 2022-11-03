import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  constructor(private service:ReportsService) { }
  exform!: FormGroup;
  ngOnInit(): void {
    this.exform = new FormGroup({
      'title' : new FormControl(null, Validators.required),
      'organizer' : new FormControl(null, Validators.required),
      'location' : new FormControl(null, Validators.required),
      'matric_id': new FormControl(localStorage.getItem('id'))
    })
  }
  checking():void{
    console.log(this.exform.value);
    //console.log(localStorage.getItem('id'));
  }
  createReport(){
    console.log(this.exform.value);
    this.service.newReport(this.exform.value).subscribe(res=>{
      console.log(res);
    })
  }

}
