import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentApplicationComponent } from './agent-application.component';

describe('AgentApplicationComponent', () => {
  let component: AgentApplicationComponent;
  let fixture: ComponentFixture<AgentApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
