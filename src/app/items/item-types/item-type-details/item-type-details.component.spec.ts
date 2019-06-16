import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypeDetailsComponent } from './item-type-details.component';

describe('ItemTypeDetailsComponent', () => {
  let component: ItemTypeDetailsComponent;
  let fixture: ComponentFixture<ItemTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
