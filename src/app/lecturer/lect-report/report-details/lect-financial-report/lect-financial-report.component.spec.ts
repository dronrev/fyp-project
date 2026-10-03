import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectFinancialReportComponent } from './lect-financial-report.component';

describe('LectFinancialReportComponent', () => {
  let component: LectFinancialReportComponent;
  let fixture: ComponentFixture<LectFinancialReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectFinancialReportComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
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
