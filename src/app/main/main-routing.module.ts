import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FoundItemsListComponent } from '../items/found-items/found-items-list/found-items-list.component';
import { UsersListComponent } from '../users/user/users-list/users-list.component';
import { LostItemsListComponent } from '../items/lost-items/lost-items-list/lost-items-list.component';
import { ItemTypesComponent } from '../items/item-types/item-types/item-types.component';
import { ItemAttributesListComponent } from '../items/item-attributes/item-attributes-list/item-attributes-list.component';
import { FeedbackListComponent } from '../contact/feedback-list/feedback-list.component';
import { PortalComponent } from './portal/portal.component';
import { StationsListComponent } from '../users/station/stations-list/stations-list.component';
import { AdminComponent } from './admin/admin.component';
import { FoundItemsByStationComponent } from '../items/found-items/found-items-by-station/found-items-by-station.component';
import { NewFoundItemComponent } from '../items/found-items/new-found-item/new-found-item.component';
import { UserDetailsComponent } from '../users/user/user-details/user-details.component';
import { MyProfileComponent } from '../users/user/my-profile/my-profile.component';
import { AgentApplicationListComponent } from '../users/applications/agent-application-list/agent-application-list.component';
import { AddAttributesComponent } from '../items/item-attributes/add-attributes/add-attributes.component';
import { AddItemTypeComponent } from '../items/item-types/add-item-type/add-item-type.component';
import { RegisterUserComponent } from '../users/user/register-user/register-user.component';
import { AddStationComponent } from '../users/station/add-station/add-station.component';
import { StationsComponent } from '../users/station/stations/stations.component';
import { AuthGuard } from '../guards/auth.guard';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { ChangePasswordComponent } from '../users/auth/change-password/change-password.component';

const routes: Routes = [
//  { path: '', component: PortalComponent, canActivate: [AuthGuard],
//  children: [
//    {path: 'portal', redirectTo: 'portal/my-profile', pathMatch: 'full'},
//    {path: 'portal/found-items', component: FoundItemsByStationComponent },
//    {path: 'portal/add-item', component: NewFoundItemComponent},
//    {path: 'portal/my-profile', component: MyProfileComponent},
//    {path: 'portal/my-profile/change-password', component: ChangePasswordComponent},
//  ]
// },
// {path: 'sidebar', component: SidebarComponent},
// { path: '', component: AdminComponent, canActivate: [AdminAuthGuard],
//  children: [
//    {path: 'admin', redirectTo: 'admin/my-profile', pathMatch: 'full'},
//    {path: 'admin/found-items', component: FoundItemsListComponent },
//    {path: 'admin/users', component: UsersListComponent},
//    {path: 'admin/waiting-list', component: LostItemsListComponent},
//    {path: 'admin/item-types', component: ItemTypesComponent},
//    {path: 'admin/item-attributes', component: ItemAttributesListComponent},
//    {path: 'admin/feedback', component: FeedbackListComponent},
//    {path: 'admin/stations', component: StationsComponent },
//    {path: 'admin/my-profile', component: MyProfileComponent},
//    {path: 'admin/applications', component: AgentApplicationListComponent},
//    {path: 'admin/add-item-attribute', component: AddAttributesComponent},
//    {path: 'admin/add-item-type', component: AddItemTypeComponent},
//    {path: 'admin/register-new-user', component: RegisterUserComponent},
//    {path: 'admin/add-station', component: AddStationComponent},
//    {path: 'admin/my-profile/change-password', component: ChangePasswordComponent},

//  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
