import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersModule } from '../users/users.module';
import { ContactModule } from '../contact/contact.module';
import { ItemsModule } from '../items/items.module';
import { PortalComponent } from './portal/portal.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { AuthGuard } from '../guards/auth.guard';
import { AdminAuthGuard } from '../guards/admin-auth.guard';

@NgModule({
  declarations: [SidebarComponent,
    PortalComponent,
    AdminComponent,
    SidebarAdminComponent],

  imports: [
    CommonModule,
    MainRoutingModule,
    UsersModule,
    ContactModule,
    ItemsModule,
    Ng2IziToastModule
  ],
  providers: [AuthGuard,
              AdminAuthGuard]
})
export class MainModule { }
