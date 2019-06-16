import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ForbiddenComponent, NotFoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ForbiddenComponent
  ]
})
export class SharedModule { }
