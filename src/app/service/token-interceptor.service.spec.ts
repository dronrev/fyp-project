import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: TEST_PROVIDERS });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
