import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { Router } from '@angular/router';
import { FeedbackDetailsComponent } from '../feedback-details/feedback-details.component';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  list: any;
  size: number;
  total: number;
  page: any;

  constructor(private feedbackService: FeedbackService,
              private router: Router,
              ) { }

  ngOnInit() {
    this.getFeedbacks();
  }

  private getFeedbacks() {
    this.feedbackService.getAllFeedbacks('0')
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  public pageChanged(page) {

    this.feedbackService.getAllFeedbacks((page - 1).toString())
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  delete(id: any) {
    this.feedbackService.deleteFeedback(id)
      .subscribe(() => {
      this.router.navigate(['/feedback']);
    });
  }

}
