import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentApplicationListComponent } from './agent-application-list.component';

describe('AgentApplicationListComponent', () => {
  let component: AgentApplicationListComponent;
  let fixture: ComponentFixture<AgentApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
