import { TestBed } from '@angular/core/testing';

import { MissiliService } from './missili.service';

describe('MissiliService', () => {
  let service: MissiliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissiliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
