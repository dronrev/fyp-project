import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectReportComponent } from './lect-report.component';

describe('LectReportComponent', () => {
  let component: LectReportComponent;
  let fixture: ComponentFixture<LectReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
