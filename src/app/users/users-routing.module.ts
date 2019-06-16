import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { StationsListComponent } from './station/stations-list/stations-list.component';
import { AgentsListComponent } from './user/agents-list/agents-list.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { AddStationComponent } from './station/add-station/add-station.component';
import { AgentApplicationComponent } from './applications/agent-application/agent-application.component';
import { AgentApplicationListComponent } from './applications/agent-application-list/agent-application-list.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'stations', component: StationsListComponent},
  {path: 'users/change-password', component: ChangePasswordComponent},
  {path: 'agent-application', component: AgentApplicationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
