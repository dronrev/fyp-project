import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectAnnouncementComponent } from './lect-announcement.component';

describe('LectAnnouncementComponent', () => {
  let component: LectAnnouncementComponent;
  let fixture: ComponentFixture<LectAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
