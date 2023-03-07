import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectDashFinancialComponent } from './lect-dash-financial.component';

describe('LectDashFinancialComponent', () => {
  let component: LectDashFinancialComponent;
  let fixture: ComponentFixture<LectDashFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectDashFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectDashFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
