import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { TitleServiceService } from './title-service.service';
import { ActivatedRoute, NavigationEnd,Router } from '@angular/router';
import { filter,map } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
  check = false;

  constructor(private title:TitleServiceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('_elorfostudent_') == "PMFKIKK"){
      this.check = true;
    }
    else if(localStorage.getItem('_elorfostudent_') == "PMFKIKK"){
      this.check = true;
    }
  }

}
