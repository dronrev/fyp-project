import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadedFeature = 'recipe';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  constructor() { }

  ngOnInit(): void {
  }
  birthday = new Date(2000, 11, 27);
  yourName = localStorage.getItem('name');
}
