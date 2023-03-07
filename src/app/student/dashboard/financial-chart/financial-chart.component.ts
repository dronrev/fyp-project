import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chart,registerables } from 'node_modules/chart.js';
import { ReportsService } from '../../report/reports.service';
Chart.register(...registerables);
@Component({
  selector: 'app-financial-chart',
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.css']
})
export class FinancialChartComponent implements OnInit {

  constructor(private elementRef : ElementRef, private service : ReportsService) { }

  feb ? : any;

  budgData : any;

  graphInput = new FormGroup({
    'inputA' : new FormControl(130),
    'inputB' : new FormControl(30)
  });

  myData = new FormGroup(
    {
      'report_id' : new FormControl(""),
      'test' : new FormControl("")
    }
  )

  janInput ? : number;
  inputA? : any;
  inputB? : any;

  febInput ? : number;
  getNumber(){
    this.service.totalCount(this.myData.value).subscribe(
      res=>{
        //console.log(res)
        this.budgData = JSON.parse(res);
        //console.log(this.budgData);
        for(let i = 0 ; i < 2;i++){
          this.feb =  (parseFloat(this.budgData[0].tempat_pertama)+parseFloat(this.budgData[0].tempat_kedua))
        }
        //console.log(this.feb)
        this.febInput = this.feb
        console.log(this.febInput)
        //return this.feb
      }
    )

    //return this.febInput
  }

  sum(){
    //this.janInput = this.inputA + this.inputB
    this.janInput = this.graphInput.value['inputA'] + this.graphInput.value['inputB']
    console.log(this.janInput)
  }

  ngOnInit(): void {
    this.getNumber();
    //const myLength = this.budgData;
    this.sum();
    this.displayChart(this.feb);

  }

  displayChart(feb:any){
    //this.getNumber();
    var ctx = <HTMLCanvasElement> document.getElementById('myChart');
    let htmlref = this.elementRef.nativeElement.querySelector(`#myChart`);
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
          datasets: [{
              label: 'Total budget per month RM',
              data: [this.janInput,100.20, 459.0, 243.20, 100, 66.8,90,157,356,65,98,234],
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
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const config =new Chart("chart2", {
    type: 'doughnut',
    data: data,
  });
  }


}
