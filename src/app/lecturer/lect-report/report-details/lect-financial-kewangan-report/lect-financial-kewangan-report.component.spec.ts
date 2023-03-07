import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectFinancialKewanganReportComponent } from './lect-financial-kewangan-report.component';

describe('LectFinancialKewanganReportComponent', () => {
  let component: LectFinancialKewanganReportComponent;
  let fixture: ComponentFixture<LectFinancialKewanganReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectFinancialKewanganReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectFinancialKewanganReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
