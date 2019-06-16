import { TestBed } from '@angular/core/testing';

import { ItemAttributesService } from './item-attributes.service';

describe('ItemAttributesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemAttributesService = TestBed.get(ItemAttributesService);
    expect(service).toBeTruthy();
  });
});
