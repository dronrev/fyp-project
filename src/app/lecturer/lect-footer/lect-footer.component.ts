import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lect-footer',
  templateUrl: './lect-footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-footer.component.css']
})
export class LectFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
