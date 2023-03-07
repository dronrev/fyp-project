import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsersService } from '../../users.service';
import { VoteService } from '../vote.service';
import { Chart,registerables } from 'node_modules/chart.js';
import { Candidate } from 'src/app/student/event/vote-result/candidate.model';
import { FormGroup, FormControl } from '@angular/forms';
Chart.register(...registerables);

@Component({
  selector: 'app-detail-vote-activity',
  templateUrl: './detail-vote-activity.component.html',
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

  mydata = new FormGroup({
    'value' : new FormControl(localStorage.getItem('_vote_id_'))
  })

  ngOnInit(): void {

    //get total voters
    this.service1.fetchStudent().pipe(map((data:any)=>data
    .filter((student:any)=>student.cawangan == localStorage.getItem('_cawangan_'))))
    .subscribe(
      res=>{
        console.log(res)
        this.totalVoters = res;
        for(var item of this.totalVoters){
          this.name[item.user_id] = item.username;
        }
      }
    )

    //get total candidate
    this.service.getTotalCandidateEvent(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        console.log(res)
        this.totalCandidates = res;
        for(let role of this.totalCandidates){
          //console.log(role.candidate)
          if(!this.listOfRole.find((element:any)=>{
            return element == role.candidate
          })){this.listOfRole.push(role.candidate)}
          //console.log(found)
        }
        console.log(this.listOfRole)
      }
    )

    //get voted candidate
    this.service.getVoteEvent(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        console.log(res)
        this.list = res
        for(var item of this.list){
          this.count[item.user_id] = (this.count[item.user_id] || 0)+1;
        }
        console.log(this.count)
      }
    )

    //get total voters voted
    this.service.getTotalVotersVoted(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        console.log(res)
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
