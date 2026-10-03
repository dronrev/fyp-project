import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavItem } from 'src/app/shared/shell/shell.component';

@Component({
  standalone: false,
  selector: 'app-lecturer',
  templateUrl: './admin.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  navItems: NavItem[] = [
    { label: 'Home', link: '/home-admin', icon: 'home' },
    { label: 'Announcement', link: '/admin-announcement', icon: 'campaign' },
    { label: 'Manage User', link: '/manage-user', icon: 'manage_accounts' },
    { label: 'Role Assigning', link: '/assign', icon: 'badge' },
    { label: 'Register User', link: '/register-user', icon: 'person_add' },
    { label: 'Voting Activity', link: '/voting', icon: 'how_to_vote' },
    { label: 'List Of Event', link: '/list-of-event', icon: 'event' },
    { label: 'List Of Report', link: '/list-of-report', icon: 'description' },
    { label: 'Certificate Template', link: '/cert-template', icon: 'workspace_premium' }
  ];

  ngOnInit(): void {
  }

}
