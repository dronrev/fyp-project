import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-member',
  templateUrl: './select-member.component.html',
  styleUrls: ['./select-member.component.css']
})
export class SelectMemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  profile:string[]=[
    "Dog","Cat","Cow","Sheep"
  ]
}
