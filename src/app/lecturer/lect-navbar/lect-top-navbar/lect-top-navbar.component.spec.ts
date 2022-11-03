import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectTopNavbarComponent } from './lect-top-navbar.component';

describe('LectTopNavbarComponent', () => {
  let component: LectTopNavbarComponent;
  let fixture: ComponentFixture<LectTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectTopNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectTopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
