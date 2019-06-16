import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-agents-list',
  templateUrl: './agents-list.component.html',
  styleUrls: ['./agents-list.component.css']
})
export class AgentsListComponent implements OnInit {

  agents: any;
  message: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAgents();
  }


  getAgents() {
    this.userService.getAllAgents({name: 'agent'})
      .subscribe(response => {
        // this.list = response['content'];
        // this.size = response.size;
        // this.page = (response.number + 1);
        // this.total = response.totalElements;
        this.agents = response;
        console.log(response);
      }
      ,
      err => {
        // this.message = 'No results';
        console.log('"error"');
        });
  }
}
