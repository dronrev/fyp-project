import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TitleServiceService } from './title-service.service';
import { ActivatedRoute, NavigationEnd,Router } from '@angular/router';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  constructor(private title:TitleServiceService) { }

  ngOnInit(): void {
  }

}
