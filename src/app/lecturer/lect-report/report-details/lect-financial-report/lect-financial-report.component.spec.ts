import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectFinancialReportComponent } from './lect-financial-report.component';

describe('LectFinancialReportComponent', () => {
  let component: LectFinancialReportComponent;
  let fixture: ComponentFixture<LectFinancialReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectFinancialReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectFinancialReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
