import { Component, OnInit } from '@angular/core';
import { AgentApplicationService } from '../../services/agent-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-application-list',
  templateUrl: './agent-application-list.component.html',
  styleUrls: ['./agent-application-list.component.css']
})
export class AgentApplicationListComponent implements OnInit {

  list: any;
  size: number;
  total: number;
  page: any;


  constructor(private appliService: AgentApplicationService,
              private router: Router) { }

  ngOnInit() {
    this.getApplis();
  }

  private getApplis() {
    console.log('get applis');
    this.appliService.getAllApplis('0')
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  public pageChanged(page) {
    console.log(page);

    this.appliService.getAllApplis((page - 1).toString())
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  deleteAppli(id: any) {
    this.appliService.deleteAppli(id)
      .subscribe(() => {
      this.router.navigate(['admin/applications']);
    });
  }


}
