import { TestBed } from '@angular/core/testing';

import { TransferParamService } from './transfer-param.service';

describe('TransferParamService', () => {
  let service: TransferParamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferParamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
