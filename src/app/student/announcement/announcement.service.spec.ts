import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { TestBed } from '@angular/core/testing';

import { AnnouncementService } from './announcement.service';

describe('AnnouncementService', () => {
  let service: AnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: TEST_PROVIDERS });
    service = TestBed.inject(AnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
