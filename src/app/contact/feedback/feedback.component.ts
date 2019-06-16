import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Ng2IzitoastService } from 'ng2-izitoast';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  public feedbackForm: FormGroup;
  obj1: any;
  constructor(private feedbackService: FeedbackService,
              public iziToast: Ng2IzitoastService
              ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.feedbackForm = new FormGroup({
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    const formValue = {
     email: this.feedbackForm.get('email').value,
     message: this.feedbackForm.get('message').value,
    };
    console.log(formValue);
    this.feedbackService.saveFeedback(formValue)
      .subscribe(response => {
        this.obj1 = response;

        this.feedbackForm.reset();
        this.iziToast.success({    title: 'OK',
        message: 'Feedback Sent Successfully!', 
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

  onSubmit2() {
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
         this.onSubmit();
         instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

       }
      , true],

      ['<button>NO</button>', function(instance, toast) {
      instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

    }], ]
  })
  }
}
