import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectDashFinancialComponent } from './lect-dash-financial.component';

describe('LectDashFinancialComponent', () => {
  let component: LectDashFinancialComponent;
  let fixture: ComponentFixture<LectDashFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectDashFinancialComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
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
