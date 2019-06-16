import { TestBed } from '@angular/core/testing';

import { LostItemsService } from './lost-items.service';

describe('LostItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LostItemsService = TestBed.get(LostItemsService);
    expect(service).toBeTruthy();
  });
});
