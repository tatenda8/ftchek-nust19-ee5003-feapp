import { Component, OnInit } from '@angular/core';
import { AgentApplicationService } from '../../services/agent-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-application-details',
  templateUrl: './agent-application-details.component.html',
  styleUrls: ['./agent-application-details.component.css']
})
export class AgentApplicationDetailsComponent implements OnInit {

  appli: any;
  constructor(private appliService: AgentApplicationService) { }

  ngOnInit() {
  }

  getAppli(id: any) {
    this.appliService.getAppli(id)
    .subscribe(res => {
      this.appli = res;
    });
  }
}
