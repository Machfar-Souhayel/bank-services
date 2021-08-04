import { TestBed } from '@angular/core/testing';

import { CreditTitleService } from './credit-title.service';

describe('CreditTitleService', () => {
  let service: CreditTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
