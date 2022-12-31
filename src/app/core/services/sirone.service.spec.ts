import { TestBed } from '@angular/core/testing';

import { SironeService } from './sirone.service';

describe('SironeService', () => {
  let service: SironeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SironeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
