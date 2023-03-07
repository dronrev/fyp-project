import { TestBed } from '@angular/core/testing';

import { EditreportService } from './editreport.service';

describe('EditreportService', () => {
  let service: EditreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
