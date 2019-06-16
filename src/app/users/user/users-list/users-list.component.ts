import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GroupService } from '../../services/group.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  list: any;
  size: number;
  total: number;
  page: any;
  groups: any;
  id: any;
  active: boolean;

  constructor(private userService: UserService,
              private groupService: GroupService,
              private router: Router,
              public iziToast: Ng2IzitoastService ) { }

  ngOnInit() {
    this.getUsers();
    this.getGroups();
  }

  private getUsers() {
    this.userService.getAllUsers('0')
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  public pageChanged(page) {

    this.userService.getAllUsers((page - 1).toString())
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  public getGroups() {
    this.groupService.getAllGroups()
      .subscribe(res => {
        this.groups = res;
      });

  }

  deleteUser(id: any) {
    this.userService.deleteUser(id)
      .subscribe(() => {
      this.router.navigate(['/admin/users']);
    });
  }

  disable(userId: string|number) {
    this.id = userId;
    this.active = false;
    this.deactivateUser(this.id, this.active);
  }

  enable(userId: string|number) {
    this.id = userId;
    this.active = true;
    this.activateUser(this.id, this.active);
  }

  activateUser(id: any, active: any) {
    console.log(active, id);
    this.userService.changeStatus(id, active)
    .subscribe(() => {
      this.router.navigate(['/admin/users']);
      this.iziToast.success({    title: 'OK',
      message: 'User Successfully Enabled! Please refresh the page',
      position: 'center',
      overlay: true,});
    },
    err => {
      this.iziToast.error({    title: 'Error',
       message: `Failed! Can't Connect to Server.`,
      position: 'center',
      overlay: true});
      }
    );
  }

  deactivateUser(id: any, active: any) {
    console.log(active, id);
    this.userService.changeStatus(id, active)
    .subscribe(() => {
      this.router.navigate(['/admin/users']);
      this.iziToast.success({    title: 'OK',
      message: 'User Successfully Disabled! Please refresh the page',
      position: 'center',
      overlay: true,});
    },
    err => {
      this.iziToast.error({    title: 'Error',
       message: `Failed! Can't Connect to Server.`,
      position: 'center',
      overlay: true});
      }
    );
  }

}
