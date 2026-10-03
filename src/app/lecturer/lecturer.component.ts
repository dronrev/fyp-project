import { ROLE } from 'src/app/shared/app-config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavItem } from 'src/app/shared/shell/shell.component';

@Component({
  standalone: false,
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  constructor() { }

  navItems: NavItem[] = [
    { label: 'Home', link: '/reviewer-home', icon: 'home' },
    { label: 'Dashboard', link: '/reviewer-dashboard', icon: 'dashboard' },
    { label: 'Report', link: '/reviewer-reports', icon: 'description' }
  ];
  userName = localStorage.getItem('name');
  roleLabel = localStorage.getItem('role') == ROLE.approver ? 'Approver' : 'Reviewer';

 // token = localStorage.getItem('token')

  private tokenExpired(token:any){
    if(!token){
      return false;
    }
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now()
  }

  ngOnInit(): void {
    if(localStorage.getItem('role') == ROLE.approver){
      this.navItems.push({ label: 'Members', link: '/members', icon: 'groups' });
    }
    if(this.tokenExpired(localStorage.getItem('token'))){
    }
    else{
    }
  }

}
