import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';

describe('EventsService', () => {
  let service: EventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: TEST_PROVIDERS });
    service = TestBed.inject(EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
