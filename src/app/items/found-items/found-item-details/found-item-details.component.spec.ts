import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundItemDetailsComponent } from './found-item-details.component';

describe('FoundItemDetailsComponent', () => {
  let component: FoundItemDetailsComponent;
  let fixture: ComponentFixture<FoundItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
