import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { VoteService } from 'src/app/admin/admin-vote-activity/vote.service';
import { UsersService } from 'src/app/admin/users.service';
import { EventsService } from '../../event/events.service';
import { ImageService } from '../../image.service';

@Component({
  selector: 'app-voting-details',
  templateUrl: './voting-details.component.html',
  styleUrls: ['./voting-details.component.css']
})
export class VotingDetailsComponent implements OnInit {
  title : any;
  constructor(private router : Router,private service : VoteService,private service2:UsersService,private service1 : EventsService,private fb : FormBuilder,private alertcontrol : AlertController) { }
  imageUrl : any;
  data = new FormGroup({
    'id' : new FormControl(localStorage.getItem('id'))
  })

  data_sent = this.fb.group({
    vote : this.fb.array([]),
    vote_id : this.fb.control({value : localStorage.getItem('_vote_id_')})
      }
    )
  validateVote = new FormGroup({
    'vote_id' : new FormControl(localStorage.getItem('_vote_id_')),
    'user_id' : new FormControl(localStorage.getItem('id'))
  })

  list : any
  listOfRole:any = []
  imageURL = '../assets/images/profile-picture/';
  totalVoters : any;
  name:any = {};
  ngOnInit(): void {

    this.service2.fetchStudent()
    .subscribe(
      res=>{
        console.log(res)
        this.totalVoters = res;
        for(var item of this.totalVoters){
          this.name[item.user_id] = item.username;
        }
      }
    )

    //console.log(this.validateVote.value)
    this.service.getSpecVote(localStorage.getItem('_vote_id_')).subscribe(
      res=>{
        this.list = JSON.parse(res);
        this.title=this.list[0].title;
        console.log(this.list);
        for(let role of this.list){
          //console.log(role.candidate)
          if(!this.listOfRole.find((element:any)=>{
            return element == role.candidate
          })){this.listOfRole.push(role.candidate)}
          //console.log(found)
        }
      }
    )
    console.log(this.listOfRole)
    console.log(this.data_sent.value)
  }



  checkList : any = [];
  check : boolean = false;

  getCandidate(event:any,item:any){
    console.log(event.target.name)
    //console.log(item)
    for(const [i, v] of this.checkList.entries()){
      //console.log("bro")
      if(event.target.name == v.candidate){
        this.check = true;
        //console.log("Found")
        //console.log(i)
        this.checkList[i] = item
        break;
      }
      else{
        this.check = false;
        //console.log("Not Found")
      }

    }
    if(this.check == false){
      this.checkList.push(item)
    }
    console.log(this.checkList)
  }

  async notify(){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : 'Vote one candidate for each position',
      buttons : ['Continue']
    });
    await messages.present();
  }
  async notify1(){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : 'Data Inserted!',
      buttons : [{text:'Continue',handler:()=>this.router.navigate(['/voting-activity'])}]
    });
    await messages.present();
  }

  submit(){
    if(this.checkList.length != this.listOfRole.length){this.notify() }
    //console.log("bro")

    else{
      for(let item of this.checkList){
        let info ={vote_id : localStorage.getItem('_vote_id_'),title : item.title, date : item.date,
         user_id : item.user_id, candidate : item.candidate}
         console.log(info)
        this.service1.enterVote(info).subscribe(
          res=>{
            console.log(res)
          }
        )
      }
      this.service1.AlreadyVote(this.validateVote.value).subscribe(
        res=>{
          console.log(res)
          this.notify1();
        }
      )
    }
  }
}
