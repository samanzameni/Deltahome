import { TestBed } from '@angular/core/testing';

import { DepositService } from './deposit.service';

describe('DepositService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositService = TestBed.get(DepositService);
    expect(service).toBeTruthy();
  });
});
