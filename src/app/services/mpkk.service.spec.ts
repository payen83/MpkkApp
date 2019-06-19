import { TestBed } from '@angular/core/testing';

import { MpkkService } from './mpkk.service';

describe('MpkkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MpkkService = TestBed.get(MpkkService);
    expect(service).toBeTruthy();
  });
});
