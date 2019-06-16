import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAttributesListComponent } from './item-attributes-list.component';

describe('ItemAttributesListComponent', () => {
  let component: ItemAttributesListComponent;
  let fixture: ComponentFixture<ItemAttributesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAttributesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAttributesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
