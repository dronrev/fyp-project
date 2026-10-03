import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectFinancialKewanganReportComponent } from './lect-financial-kewangan-report.component';

describe('LectFinancialKewanganReportComponent', () => {
  let component: LectFinancialKewanganReportComponent;
  let fixture: ComponentFixture<LectFinancialKewanganReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectFinancialKewanganReportComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
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
