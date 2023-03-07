import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { filter,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleServiceService {

  constructor(private activatedRoute : ActivatedRoute, private title : Title , private router : Router) { }





}
