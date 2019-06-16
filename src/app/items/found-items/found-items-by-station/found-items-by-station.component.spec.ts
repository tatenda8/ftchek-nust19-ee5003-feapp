import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundItemsByStationComponent } from './found-items-by-station.component';

describe('FoundItemsByStationComponent', () => {
  let component: FoundItemsByStationComponent;
  let fixture: ComponentFixture<FoundItemsByStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundItemsByStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundItemsByStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
