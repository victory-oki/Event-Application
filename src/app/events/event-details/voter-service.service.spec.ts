import { TestBed } from '@angular/core/testing';

import { VoterServiceService } from './voter-service.service';

describe('VoterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoterServiceService = TestBed.get(VoterServiceService);
    expect(service).toBeTruthy();
  });
});
