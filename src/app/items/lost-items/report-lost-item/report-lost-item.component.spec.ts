import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLostItemComponent } from './report-lost-item.component';

describe('ReportLostItemComponent', () => {
  let component: ReportLostItemComponent;
  let fixture: ComponentFixture<ReportLostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportLostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
