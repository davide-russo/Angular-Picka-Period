import { TestBed } from '@angular/core/testing';

import { NgxPickaPeriodService } from './ngx-picka-period.service';

describe('NgxPickaPeriodService', () => {
  let service: NgxPickaPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPickaPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
