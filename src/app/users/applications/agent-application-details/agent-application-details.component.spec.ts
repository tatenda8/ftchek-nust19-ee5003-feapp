import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentApplicationDetailsComponent } from './agent-application-details.component';

describe('AgentApplicationDetailsComponent', () => {
  let component: AgentApplicationDetailsComponent;
  let fixture: ComponentFixture<AgentApplicationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentApplicationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
