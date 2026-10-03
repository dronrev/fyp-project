import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { TestBed } from '@angular/core/testing';

import { TitleServiceService } from './title-service.service';

describe('TitleServiceService', () => {
  let service: TitleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: TEST_PROVIDERS });
    service = TestBed.inject(TitleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
