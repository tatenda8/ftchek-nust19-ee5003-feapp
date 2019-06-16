import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public userDetails: any;
  msg: string;

  constructor(private authService: AuthenticationService,
              private router: Router,
              public iziToast: Ng2IzitoastService) {}

  ngOnInit() {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public login() {
// console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(response => {
        this.userDetails = response;
        localStorage.clear();
        localStorage.setItem('user', response);
        localStorage.setItem('accActive', response.accountNonLocked);
        localStorage.setItem('stationId', response.station.id );
        localStorage.setItem('userId', response.id );
        localStorage.setItem('privileges', response.group.name);
        this.loginForm.reset();
       // console.log(this.userDetails);
        if (response.enabled && response.group.name === 'Agent') {
          this.router.navigate(['/portal']);
          this.iziToast.info({    title: 'Hello',
          message: `Welcome! ${response.username}`,
          position: 'center' });

           } else if (response.enabled && response.group.name === 'Admin') {
            this.router.navigate(['/admin']);
            this.iziToast.info({    title: 'Hello',
          message: `Welcome! ${response.username}`,
          position: 'center' });
           } else {
             this.msg = '"Account Suspended"';
             localStorage.clear();
             this.router.navigate(['/login']);
             this.iziToast.error({    title: 'Error',
         message: `Error! Account Suspended`, 
        position: 'center',});

        }
      },
      err => {
        this.msg = '"Error: Wrong Username or Password"';
        this.iziToast.error({    title: 'Error',
         message: `Error! Wrong Username or Password`, 
        position: 'center',});
        this.router.navigate(['/login']);
        });
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
