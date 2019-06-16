import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { FeedbackComponent } from './contact/feedback/feedback.component';
import { FeedbackListComponent } from './contact/feedback-list/feedback-list.component';
import { FeedbackDetailsComponent } from './contact/feedback-details/feedback-details.component';
import { ReportLostItemComponent } from './items/lost-items/report-lost-item/report-lost-item.component';
import { FoundItemsListComponent } from './items/found-items/found-items-list/found-items-list.component';
import { NewFoundItemComponent } from './items/found-items/new-found-item/new-found-item.component';
import { LostItemsListComponent } from './items/lost-items/lost-items-list/lost-items-list.component';
import { FoundSomethingComponent } from './items/found-items/found-something/found-something.component';
import { ItemAttributesListComponent } from './items/item-attributes/item-attributes-list/item-attributes-list.component';
import { ItemTypesComponent } from './items/item-types/item-types/item-types.component';
import { AddAttributesComponent } from './items/item-attributes/add-attributes/add-attributes.component';
import { AddItemTypeComponent } from './items/item-types/add-item-type/add-item-type.component';
import { ItemSearchComponent } from './items/found-items/item-search/item-search.component';
import { FoundItemDetailsComponent } from './items/found-items/found-item-details/found-item-details.component';
import { PortalComponent } from './main/portal/portal.component';
import { AuthGuard } from './guards/auth.guard';
import { FoundItemsByStationComponent } from './items/found-items/found-items-by-station/found-items-by-station.component';
import { MyProfileComponent } from './users/user/my-profile/my-profile.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { AdminComponent } from './main/admin/admin.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UsersListComponent } from './users/user/users-list/users-list.component';
import { StationsComponent } from './users/station/stations/stations.component';
import { AgentApplicationListComponent } from './users/applications/agent-application-list/agent-application-list.component';
import { RegisterUserComponent } from './users/user/register-user/register-user.component';
import { AddStationComponent } from './users/station/add-station/add-station.component';
import { LoginComponent } from './users/auth/login/login.component';
import { StationsListComponent } from './users/station/stations-list/stations-list.component';
import { AgentsListComponent } from './users/user/agents-list/agents-list.component';
import { ChangePasswordComponent } from './users/auth/change-password/change-password.component';
import { AgentApplicationComponent } from './users/applications/agent-application/agent-application.component';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'feedback', component: FeedbackComponent},


  {path: 'login', component: LoginComponent},
  {path: 'stations', component: StationsListComponent},
  {path: 'agent-application', component: AgentApplicationComponent},


  {path: 'report-lost-item', component: ReportLostItemComponent},
  {path: 'found-something', component: FoundSomethingComponent},
  {path : 'item-search', component: ItemSearchComponent, children: [
    {path: 'item-details', component: FoundItemDetailsComponent}
  ] },


  { path: '', component: PortalComponent, canActivate: [AuthGuard],
  children: [
    {path: 'portal', redirectTo: 'portal/my-profile', pathMatch: 'full'},
    {path: 'portal/found-items', component: FoundItemsByStationComponent },
    {path: 'portal/add-item', component: NewFoundItemComponent},
    {path: 'portal/my-profile', component: MyProfileComponent},
    {path: 'portal/my-profile/change-password', component: ChangePasswordComponent},
  ]
 },


 { path: '', component: AdminComponent, canActivate: [AdminAuthGuard],
  children: [
    {path: 'admin', redirectTo: 'admin/my-profile', pathMatch: 'full'},
    {path: 'admin/found-items', component: FoundItemsListComponent },
    {path: 'admin/users', component: UsersListComponent},
    {path: 'admin/waiting-list', component: LostItemsListComponent},
    {path: 'admin/item-types', component: ItemTypesComponent},
    {path: 'admin/item-attributes', component: ItemAttributesListComponent},
    {path: 'admin/feedback', component: FeedbackListComponent},
    {path: 'admin/stations', component: StationsComponent },
    {path: 'admin/my-profile', component: MyProfileComponent},
    {path: 'admin/applications', component: AgentApplicationListComponent},
    {path: 'admin/add-item-attribute', component: AddAttributesComponent},
    {path: 'admin/add-item-type', component: AddItemTypeComponent},
    {path: 'admin/register-new-user', component: RegisterUserComponent},
    {path: 'admin/add-station', component: AddStationComponent},
    {path: 'admin/my-profile/change-password', component: ChangePasswordComponent},
    // {path: '**', component: NotFoundComponent}
  ]},


  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
