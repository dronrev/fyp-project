import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { APP_NAME, APP_SHORT_NAME } from '../app-config';

export interface NavItem {
  label: string;
  link: string;
  icon: string;
}

// Shared page frame: side navigation, top bar with the signed-in user, and footer.
@Component({
  standalone: false,
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, OnDestroy {
  @Input() navItems: NavItem[] = [];
  @Input() userName: string | null = '';
  @Input() roleLabel = '';
  @Input() avatarUrl?: string;
  @Input() profileLink?: string;

  appName = APP_NAME;
  appShortName = APP_SHORT_NAME;
  year = new Date().getFullYear();

  isHandset = false;
  private layout?: Subscription;

  constructor(private breakpoints: BreakpointObserver, private auth: AuthService) { }

  ngOnInit(): void {
    this.layout = this.breakpoints.observe('(max-width: 959px)').subscribe(
      state=>{
        this.isHandset = state.matches;
      }
    )
  }

  ngOnDestroy(): void {
    this.layout?.unsubscribe();
  }

  signOut(){
    this.auth.logOut();
  }
}
