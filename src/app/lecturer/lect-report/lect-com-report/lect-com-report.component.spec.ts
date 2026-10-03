import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectComReportComponent } from './lect-com-report.component';

describe('LectComReportComponent', () => {
  let component: LectComReportComponent;
  let fixture: ComponentFixture<LectComReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectComReportComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectComReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
