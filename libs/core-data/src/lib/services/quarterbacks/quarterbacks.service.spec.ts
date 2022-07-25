import { TestBed } from '@angular/core/testing';

import { QuarterbacksService } from './quarterbacks.service';

describe('QuarterbacksService', () => {
  let service: QuarterbacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuarterbacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
