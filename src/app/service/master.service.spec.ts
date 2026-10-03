import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: TEST_PROVIDERS });
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
