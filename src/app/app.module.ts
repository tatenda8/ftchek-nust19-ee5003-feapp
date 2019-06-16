import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { ContactModule } from './contact/contact.module';
import { ItemsModule } from './items/items.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    UsersModule,
    ContactModule,
    ItemsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    ModalModule,
    MainModule,
    // SweetAlert2Module.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
