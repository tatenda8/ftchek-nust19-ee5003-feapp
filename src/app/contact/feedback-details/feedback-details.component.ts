import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {

  feedback: any;

  constructor(private feedbackService: FeedbackService,
              ) { }

  ngOnInit() {
  }

  getFeedback(id: any) {
    this.feedbackService.getFeedback(id)
      .subscribe(res => {
        this.feedback = res;
        console.log('it works');
      });
  }

}
