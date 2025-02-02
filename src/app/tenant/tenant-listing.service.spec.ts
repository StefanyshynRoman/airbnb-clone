import { TestBed } from '@angular/core/testing';

import { TentantListingService } from './tenant-listing.service';

describe('TentantListingService', () => {
  let service: TentantListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TentantListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
