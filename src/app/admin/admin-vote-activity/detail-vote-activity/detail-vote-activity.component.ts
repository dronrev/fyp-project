import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsersService } from '../../users.service';
import { VoteService } from '../vote.service';
import { Chart,registerables } from 'chart.js';
import { Candidate } from 'src/app/student/event/vote-result/candidate.model';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
Chart.register(...registerables);

@Component({
  standalone: false,
  selector: 'app-detail-vote-activity',
  templateUrl: './detail-vote-activity.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./detail-vote-activity.component.css']
})
export class DetailVoteActivityComponent implements OnInit {

  constructor(private service : VoteService, private service1 : UsersService) { }

  totalCandidates : any;
  totalVoters : any;
  totalVotersVoted : any;
  listOfRole:any = []
  count:any = {};
  list : any;
  candidate!: Candidate[];
  name:any = {};

  mydata = new UntypedFormGroup({
    'value' : new UntypedFormControl(localStorage.getItem('_vote_id_'))
  })

  ngOnInit(): void {

    //get total voters
    this.service1.fetchMembers().pipe(map((data:any)=>data
    .filter((student:any)=>student.group_id == localStorage.getItem('_vote_group_id_'))))
    .subscribe(
      res=>{
        this.totalVoters = res;
        for(var item of this.totalVoters){
          this.name[item.user_id] = item.username;
        }
      }
    )

    //get total candidate
    this.service.getTotalCandidateEvent(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        this.totalCandidates = res;
        for(let role of this.totalCandidates){
          //console.log(role.candidate)
          if(!this.listOfRole.find((element:any)=>{
            return element == role.candidate
          })){this.listOfRole.push(role.candidate)}
          //console.log(found)
        }
      }
    )

    //get voted candidate
    this.service.getVoteEvent(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        this.list = res
        for(var item of this.list){
          this.count[item.user_id] = (this.count[item.user_id] || 0)+1;
        }
      }
    )

    //get total voters voted
    this.service.getTotalVotersVoted(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        this.totalVotersVoted = res
      }
    )
    //this.displayChart()
  }

  displayChart(){
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: [],
          datasets: [{
              label: 'Total Count of Vote',
              data: [],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba()'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
