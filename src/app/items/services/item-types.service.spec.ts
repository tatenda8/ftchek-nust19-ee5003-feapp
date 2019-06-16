import { TestBed } from '@angular/core/testing';

import { ItemTypesService } from './item-types.service';

describe('ItemTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemTypesService = TestBed.get(ItemTypesService);
    expect(service).toBeTruthy();
  });
});
