import { TestBed } from '@angular/core/testing';

import { ComplainserviceService } from './complainservice.service';

describe('ComplainserviceService', () => {
  let service: ComplainserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplainserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
