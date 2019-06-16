import { TestBed } from '@angular/core/testing';

import { AgentApplicationService } from './agent-application.service';

describe('AgentApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentApplicationService = TestBed.get(AgentApplicationService);
    expect(service).toBeTruthy();
  });
});
