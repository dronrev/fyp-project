import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-select-member',
  templateUrl: './select-member.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
