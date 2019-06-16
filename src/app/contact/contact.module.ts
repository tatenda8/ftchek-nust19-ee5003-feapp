import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2IziToastModule } from 'ng2-izitoast';


@NgModule({
  declarations: [
    ContactUsComponent,
    FeedbackComponent,
    FeedbackListComponent,
    FeedbackDetailsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    Ng2IziToastModule
  ],
  exports: [
    ContactUsComponent,
    FeedbackComponent
  ]
})
export class ContactModule { }
