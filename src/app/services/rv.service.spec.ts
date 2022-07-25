import { TestBed } from '@angular/core/testing';

import { RvService } from './rv.service';

describe('RvService', () => {
  let service: RvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
