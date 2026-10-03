import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { EventsService } from '../../events.service';
import { Candidate } from '../candidate.model';
@Component({
  standalone: false,
  selector: 'app-results',
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private service : EventsService) { }

  mydata = new UntypedFormGroup({
    'value' : new UntypedFormControl(localStorage.getItem('_dietov_current_'))
  })

  candidate!: Candidate[]

  count:any = {};
  list:any;
  ngOnInit(): void {
    this.service.voteCount(this.mydata.value).subscribe(
      res=>{
        this.list = JSON.parse(res)
        for(var item of JSON.parse(res)){
          this.count[item.user_id] = (this.count[item.user_id] || 0)+1;
        }
        this.service.getCandidate(this.mydata.value).subscribe(
          getCand=>{
            this.candidate = JSON.parse(getCand)
            //console.log(this.count[this.list.user_id])
            for(let i = 0 ; i < this.candidate.length ; i++){
              if(this.count.hasOwnProperty(this.candidate[i].user_id)){
                //console.log("lulus bro")
                //console.log(this.count[this.candidate[i].user_id])
                //this.candidate[i].count = this.count[this.candidate[i].user_id];
              }
            }
          }
        )
      }
    )
  }



}
