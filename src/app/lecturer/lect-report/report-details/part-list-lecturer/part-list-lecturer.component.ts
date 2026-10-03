import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { EditreportService } from 'src/app/student/report/editreport/editreport.service';

@Component({
  standalone: false,
  selector: 'app-part-list-lecturer',
  templateUrl: './part-list-lecturer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./part-list-lecturer.component.css']
})
export class PartListLecturerComponent implements OnInit {
  data = new UntypedFormGroup(
    {
      'report_id' : new UntypedFormControl(localStorage.getItem('reportID'))
    }
  )
  constructor(private service:EditreportService) { }
    list : any;
  ngOnInit(): void {
    this.service.getParticipants(this.data.value).
    subscribe(res=>{
      this.list = JSON.parse(res);

    })
  }

}
