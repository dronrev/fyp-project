import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { TestBed } from '@angular/core/testing';

import { LectReportService } from './lect-report.service';

describe('LectReportService', () => {
  let service: LectReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: TEST_PROVIDERS });
    service = TestBed.inject(LectReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
