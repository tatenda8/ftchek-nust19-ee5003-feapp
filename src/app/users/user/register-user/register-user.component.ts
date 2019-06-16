import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StationService } from '../../services/station.service';
import { GroupService } from '../../services/group.service';
import { UserService } from '../../services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public regUserForm: FormGroup;
  stations: any;
  groups: any;
  obj1: any;

  constructor(private stationService: StationService,
              private groupService: GroupService,
              private userService: UserService,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.createUserRegForm();
    this.getGroups();
    this.getStations();
  }

  private createUserRegForm() {
    this.regUserForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      groupId: new FormControl('', Validators.required),
      active: new FormControl('', Validators.required),
      stationId: new FormControl('', Validators.required)

    });
  }

  private getStations() {
    this.stationService.getStations()
      .subscribe(res => {
        this.stations = res;
        console.log(res);
      });
  }

  private getGroups() {
    this.groupService.getAllGroups()
      .subscribe(res => {
        this.groups = res;
      });
  }



  onSubmit() {
    this.iziToast.question({
      timeout: 0,
      close: false,
      overlay: true,
       id: 'question',
       zindex: '999',
       title: 'Submission',
       message: 'Submit?',
       position: 'center',
       buttons: [        ['<button><b>YES</b></button>', (instance, toast) => {
         this.onSubmit2();
         instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

       }
      , true],

      ['<button>NO</button>', function(instance, toast) {
      instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

    }], ]
  })
  }

  onSubmit2() {
    const formValue = {
      username: this.regUserForm.get('username').value,
      password: this.regUserForm.get('password').value,
      firstName: this.regUserForm.get('firstName').value,
      lastName: this.regUserForm.get('lastName').value,
      email: this.regUserForm.get('email').value,
      phoneNumber: this.regUserForm.get('phoneNumber').value,
      address: this.regUserForm.get('address').value,
      groupId: this.regUserForm.get('groupId').value,
      active: this.regUserForm.get('active').value,
      stationId: this.regUserForm.get('stationId').value,
     };
    // console.log(formValue);
    this.userService.saveUser(formValue)
       .subscribe(response => {
         this.obj1 = response;
         this.regUserForm.reset();
         this.iziToast.success({    title: 'OK',
        message: `New User Successfully Registered!`,
        position: 'center', });
      },
      err => {
        this.iziToast.error({    title: 'Error',
         message: `Error! Can't Connect to Server`,
        position: 'center', });
      });
  }

}
