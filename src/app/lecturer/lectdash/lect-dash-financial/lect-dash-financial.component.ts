import { Component, OnInit,ElementRef } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
import { map } from 'rxjs/operators';
import { ReportsService } from 'src/app/student/report/reports.service';
Chart.register(...registerables);

@Component({
  selector: 'app-lect-dash-financial',
  templateUrl: './lect-dash-financial.component.html',
  styleUrls: ['./lect-dash-financial.component.css']
})
export class LectDashFinancialComponent implements OnInit {

  constructor(private elementRef : ElementRef, private service : ReportsService) { }

  list:any;
  listOfCashOutMonth : any;
  dataa :any;
  feb !: any;
  oldestDate : any;
  latestYear : any;
  yearDiff : any;
  year:any = [];
  currentYear : any;
  cashOut:any = [0,0,0,0,0,0,0,0,0,0,0,0];
  newArr : any=[];
  theChart : any;
  check : boolean = false
  ngOnInit(): void {
    if(localStorage.getItem('_sepesial_elor_rof_') != "TDA"){
      this.check = true;
    }
    this.service.getFinancial().subscribe(
      res=>{
        //console.log(this.currentYear)
        //console.log(res)
        this.list = res;
        this.oldestDate = this.list[this.list.length-1].date
        this.latestYear = this.list[0].date
        this.yearDiff = new Date(this.latestYear).getFullYear() - new Date(this.oldestDate).getFullYear();
        //total year between oldest report to newest report
        for(let i = 0 ; i <=this.yearDiff ; i++){
          this.year.push(new Date(this.oldestDate).getFullYear() + i)
        }
      }
    )

  }

  //getYear
  getYear(event:any){

    console.log(event.value)
    this.currentYear = event.value;
    this.service.getFinancial().pipe(map((data:any)=>data.filter((myItem:any)=>new Date(myItem.date).getFullYear() == this.currentYear)))
    .subscribe(
      res=>{
        let prev = this.currentYear;
        //count every month cash flow out
        console.log(res)
        this.listOfCashOutMonth = res;
        //console.log(this.listOfCashOutMonth)
        for(let i = 1 ; i <=12 ; i++){
          let testPlus = 0;
          for(let item of this.listOfCashOutMonth){
            if(new Date(item.date).getMonth()+1 == i){
              //console.log("bro")
              if(item.bajet_diluluskan == null)
              item.bajet_diluluskan = 0;
              testPlus += parseFloat(item.bajet_diluluskan)
              //this.newArr[i] = this.cashOut.map(function(val:number){return val+ parseFloat(item.bajet_diluluskan)})
              //console.log(testPlus)
            }
          }
          this.newArr.push(testPlus)
          //console.log(this.newArr)
        }
        //console.log(this.dataa)
        this.displayChart()
      }
    )
  }

  displayChart(){
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
          datasets: [{
              label: 'Total budget per month RM',
              data: [this.newArr[0],this.newArr[1], this.newArr[2], this.newArr[3],this.newArr[4], this.newArr[5],this.newArr[6]
              ,this.newArr[7],this.newArr[8],this.newArr[9],this.newArr[10],this.newArr[11]],
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
    //this.getNumber();
  /*const data = {
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
  });*/
  }

}
