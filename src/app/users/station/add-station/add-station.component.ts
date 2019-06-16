import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StationService } from '../../services/station.service';
import { Ng2IziToastModule, Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {
  public stationForm: FormGroup;
  stations: any;
  station: any;

  constructor(private stationService: StationService,
              public iziToast: Ng2IzitoastService
              ) { }

  ngOnInit() {
    this.createStationForm();
  }

  private createStationForm() {
    this.stationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
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
    this.stationService.saveStation(this.stationForm.value)
       .subscribe(response => {
         this.station = response;
         console.log(this.station);
         this.stationForm.reset();
         this.iziToast.success({    title: 'OK',
         message: `Station Successfully Added!`,
         position: 'center', });
       },
       err => {
         this.iziToast.error({    title: 'Error',
          message: `Error! Can't Connect to Server`,
         position: 'center', });
       });
  }

}
