import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { TestBed } from '@angular/core/testing';

import { EditreportService } from './editreport.service';

describe('EditreportService', () => {
  let service: EditreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: TEST_PROVIDERS });
    service = TestBed.inject(EditreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
