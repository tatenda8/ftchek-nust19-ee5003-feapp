import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoundItemComponent } from './new-found-item.component';

describe('NewFoundItemComponent', () => {
  let component: NewFoundItemComponent;
  let fixture: ComponentFixture<NewFoundItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFoundItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFoundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
