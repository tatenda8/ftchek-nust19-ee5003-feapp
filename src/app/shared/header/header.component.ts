import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from 'src/app/users/services/authentication.service';
import { AuthenticationService } from '../../users/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public signedIn: boolean;
  public privileges: string;


  constructor( private authService: AuthenticationService) { }

  ngOnInit() {
   this.signedInUser();
   this.getPrivileges()
  }

   signedInUser() {
    if (localStorage.getItem('user')) {
      this.signedIn = true;
    } else { this.signedIn = false; }
  }

  getPrivileges() {
    if(localStorage.getItem('privileges') === 'Admin') {
      this.privileges = 'Admin';
    } else if(localStorage.getItem('privileges') === 'Agent') {
      this.privileges = 'Agent';
    } else{this.privileges = 'none';}
  }

  public logout() {
    this.authService.logout();
  }

}
