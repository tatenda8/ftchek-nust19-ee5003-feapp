import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AgentApplicationService } from '../../services/agent-application.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-agent-application',
  templateUrl: './agent-application.component.html',
  styleUrls: ['./agent-application.component.css']
})
export class AgentApplicationComponent implements OnInit {

  appliForm: FormGroup;
  appli: any;

  constructor(private appliService: AgentApplicationService,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.createAppliForm();
  }

  private createAppliForm() {
    this.appliForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      stationName: new FormControl('', Validators.required),
      stationLocation: new FormControl('', Validators.required),
      stationAddress: new FormControl('', Validators.required)

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
      console.log(this.appliForm.value);
      this.appliService.saveAppli(this.appliForm.value)
    .subscribe(response => {
      this.appli = response;
      this.appliForm.reset();
      this.iziToast.success({    title: 'OK',
        message: `Application Successfully Submitted! \n You will be contacted through your email shortly.`,
        position: 'center', });
      },
      err => {
        this.iziToast.error({    title: 'Error',
         message: `Error! Can't Connect to Server`,
        position: 'center', });
      });
  }

}
