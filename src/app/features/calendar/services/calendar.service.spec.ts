import { TestBed } from '@angular/core/testing';

import { CalendarServicesService } from './calendar.service';

describe('CalendarServicesService', () => {
  let service: CalendarServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
