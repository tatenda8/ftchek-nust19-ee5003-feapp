import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'feedback-list', component: FeedbackListComponent, children: [
    {path: 'feedbackdetails', component: FeedbackDetailsComponent}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
