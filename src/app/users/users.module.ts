import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './auth/login/login.component';

import { StationsListComponent } from './station/stations-list/stations-list.component';
import { AgentsListComponent } from './user/agents-list/agents-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { AddStationComponent } from './station/add-station/add-station.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { AgentApplicationComponent } from './applications/agent-application/agent-application.component';
import { AgentApplicationListComponent } from './applications/agent-application-list/agent-application-list.component';
import { AgentApplicationDetailsComponent } from './applications/agent-application-details/agent-application-details.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { StationsComponent } from './station/stations/stations.component';
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  declarations: [
    LoginComponent,
    StationsListComponent,
    AgentsListComponent,
    RegisterUserComponent,
    AddStationComponent,
    UsersListComponent,
    ChangePasswordComponent,
    UserDetailsComponent,
    AgentApplicationComponent,
    AgentApplicationListComponent,
    AgentApplicationDetailsComponent,
    MyProfileComponent,
    StationsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TabsModule.forRoot(),
    Ng2IziToastModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UsersModule { }
