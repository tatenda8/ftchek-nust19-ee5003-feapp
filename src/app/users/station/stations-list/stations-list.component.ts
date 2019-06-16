import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent implements OnInit {

  public stations;
  size: number;
  total: number;
  page: number;

  constructor(private stationService: StationService,
              private router: Router) { }

  ngOnInit() {
    this.getStations();
  }

  private getStations() {
    this.stationService.getAllStations('0')
      .subscribe(response => {
        this.stations = response['content'];
        this.size = response.size;
        this.page = response.number;
        this.total = response.totalElements;
      });
    console.log(this.stations);
  }

  deleteStation(id: any) {
    this.stationService.deleteStation(id)
      .subscribe(() => {
     // this.stations = response;
      this.router.navigate(['/stations']);
    });
  }

}
