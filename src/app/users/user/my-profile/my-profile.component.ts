import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { StationService } from '../../services/station.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: any;
  station: any;

  constructor(private userService: UserService,
              private stationService: StationService ) { }

  ngOnInit() {
    this.getUser();
    this.getStation();
  }

  getUser() {
    this.userService.getUser(localStorage.getItem('userId'))
      .subscribe(response => {
        this.user = response;
      });
  }

  getStation() {
    this.stationService.getStation(localStorage.getItem('stationId'))
      .subscribe(response => {
        this.station = response;
      });
  }

}
