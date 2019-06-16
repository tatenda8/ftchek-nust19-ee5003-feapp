import { TestBed } from '@angular/core/testing';

import { FoundItemsService } from './found-items.service';

describe('FoundItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoundItemsService = TestBed.get(FoundItemsService);
    expect(service).toBeTruthy();
  });
});
