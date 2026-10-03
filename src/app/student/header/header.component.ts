import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { UntypedFormBuilder, UntypedFormControl } from "@angular/forms";

@Component({
  standalone: false,
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit{

  constructor(private fb : UntypedFormBuilder){}

  count = 0;

  list = this.fb.group({
    yourname : [""],
    vote : this.fb.array([])
  })

  ngOnInit():void{
  }

  add(){
    let info = {name : this.list.value['yourname'] , status : true}
    this.list.value['vote'].push(info)
    this.count++;
  }

  remove(){
    let data = this.list.value['vote'][5]
  }

}
