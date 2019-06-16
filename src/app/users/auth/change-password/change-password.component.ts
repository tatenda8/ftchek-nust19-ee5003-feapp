import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  pswrdinfo: any;

  constructor(private userService: UserService,
              private router: Router,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.createChangePasswordForm();
  }

  private createChangePasswordForm() {
    this.changePasswordForm = new FormGroup({
      username: new FormControl('', Validators.required),
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
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
    this.userService.changePassword(this.changePasswordForm.value)
       .subscribe(response => {
         this.pswrdinfo = response;
         console.log(this.pswrdinfo);
         this.changePasswordForm.reset();
         localStorage.clear();
         this.router.navigate[('/login')];
       });
  }

  cancel() {
    this.router.navigate(['/home']);
  }

}
