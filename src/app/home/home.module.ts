import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ItemSearchComponent } from '../items/found-items/item-search/item-search.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsModule } from '../items/items.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  declarations: [
    HomeComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    ModalModule,
    ItemsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    Ng2IziToastModule
  ],

  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
