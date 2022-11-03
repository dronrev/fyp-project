import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectNavbarComponent } from './lect-navbar.component';

describe('LectNavbarComponent', () => {
  let component: LectNavbarComponent;
  let fixture: ComponentFixture<LectNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
