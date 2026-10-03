import { ROLE } from 'src/app/shared/app-config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/shared/shell/shell.component';
import { ImageService } from './image.service';

@Component({
  standalone: false,
  selector: 'app-student',
  templateUrl: './student.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router : Router, private img : ImageService) { }

  navItems: NavItem[] = [
    { label: 'Home', link: '/home', icon: 'home' },
    { label: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
    { label: 'Event', link: '/event', icon: 'event' },
    { label: 'Report', link: '/report', icon: 'description' },
    { label: 'Voting', link: '/voting-activity', icon: 'how_to_vote' },
    { label: 'Announcement', link: '/announcement', icon: 'campaign' }
  ];
  userName = localStorage.getItem('name');
  roleLabel = localStorage.getItem('role') == ROLE.leader ? 'Leader' : 'Member';
  imageURL: string | undefined;
  defaultImg = "assets/images/default-image.jpg";

  private tokenExpired(token:any){
    if(!token){
      return false;
    }
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 360000 > Date.now()
  }
  ngOnInit(): void {

    if(!this.tokenExpired(localStorage.getItem('token'))){
      alert("Your session is expired!");
      this.router.navigate(['sign-in']);
    }

    if(localStorage.getItem('role') == ROLE.leader){
      this.navItems.push({ label: 'Pending User', link: '/pending-user', icon: 'person_add' });
    }

    this.img.getProfile({ id : localStorage.getItem('id') }).subscribe(
      res=>{
        const profile = JSON.parse(res)[0];
        if(profile?.profilepic){
          this.imageURL = 'assets/images/profile-picture/'+profile.profilepic;
        }
      }
    )
  }

}
