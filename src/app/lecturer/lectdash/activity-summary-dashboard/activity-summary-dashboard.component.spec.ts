import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySummaryDashboardComponent } from './activity-summary-dashboard.component';

describe('ActivitySummaryDashboardComponent', () => {
  let component: ActivitySummaryDashboardComponent;
  let fixture: ComponentFixture<ActivitySummaryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySummaryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySummaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
