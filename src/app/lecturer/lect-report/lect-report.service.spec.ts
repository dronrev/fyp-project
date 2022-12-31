import { TestBed } from '@angular/core/testing';

import { LectReportService } from './lect-report.service';

describe('LectReportService', () => {
  let service: LectReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
