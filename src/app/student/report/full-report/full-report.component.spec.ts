import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportComponent } from './full-report.component';

describe('FullReportComponent', () => {
  let component: FullReportComponent;
  let fixture: ComponentFixture<FullReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
