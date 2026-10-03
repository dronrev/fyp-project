import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { TestBed } from '@angular/core/testing';

import { VoteService } from './vote.service';

describe('VoteService', () => {
  let service: VoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: TEST_PROVIDERS });
    service = TestBed.inject(VoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
