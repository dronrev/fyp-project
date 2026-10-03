import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComReportComponent } from './com-report.component';

describe('ComReportComponent', () => {
  let component: ComReportComponent;
  let fixture: ComponentFixture<ComReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComReportComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
