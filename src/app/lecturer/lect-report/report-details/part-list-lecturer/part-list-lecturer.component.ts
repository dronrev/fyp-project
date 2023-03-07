import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EditreportService } from 'src/app/student/report/editreport/editreport.service';

@Component({
  selector: 'app-part-list-lecturer',
  templateUrl: './part-list-lecturer.component.html',
  styleUrls: ['./part-list-lecturer.component.css']
})
export class PartListLecturerComponent implements OnInit {
  data = new FormGroup(
    {
      'report_id' : new FormControl(localStorage.getItem('reportID'))
    }
  )
  constructor(private service:EditreportService) { }
    list : any;
  ngOnInit(): void {
    this.service.getParticipants(this.data.value).
    subscribe(res=>{
      console.log(res);
      console.log(this.data.value['report_id'])
      this.list = JSON.parse(res);

    })
  }

}
