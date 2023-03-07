import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit{

  constructor(private fb : FormBuilder){}

  count = 0;

  list = this.fb.group({
    yourname : [""],
    vote : this.fb.array([])
  })

  ngOnInit():void{
    console.log(this.list.value['name'])
  }

  add(){
    let info = {name : this.list.value['yourname'] , status : true}
    this.list.value['vote'].push(info)
    console.log(JSON.stringify(this.list.value['vote']))
    this.count++;
    console.log(this.list)
  }

  remove(){
    let data = this.list.value['vote'][5]
    console.log(data)
  }

}
