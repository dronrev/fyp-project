import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectComReportComponent } from './lect-com-report.component';

describe('LectComReportComponent', () => {
  let component: LectComReportComponent;
  let fixture: ComponentFixture<LectComReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectComReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectComReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
