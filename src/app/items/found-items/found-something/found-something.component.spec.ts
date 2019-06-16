import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundSomethingComponent } from './found-something.component';

describe('FoundSomethingComponent', () => {
  let component: FoundSomethingComponent;
  let fixture: ComponentFixture<FoundSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
