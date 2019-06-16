import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { FoundItemsListComponent } from './found-items/found-items-list/found-items-list.component';
import { NewFoundItemComponent } from './found-items/new-found-item/new-found-item.component';
import { ReportLostItemComponent } from './lost-items/report-lost-item/report-lost-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FoundItemsService } from './services/found-items.service';
import { LostItemsService } from './services/lost-items.service';
import { ItemAttributesService } from './services/item-attributes.service';
import { ItemTypesService } from './services/item-types.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ItemAttributesListComponent } from './item-attributes/item-attributes-list/item-attributes-list.component';
import { AddAttributesComponent } from './item-attributes/add-attributes/add-attributes.component';
import { AddItemTypeComponent } from './item-types/add-item-type/add-item-type.component';
import { ItemTypesComponent } from './item-types/item-types/item-types.component';
import { LostItemsListComponent } from './lost-items/lost-items-list/lost-items-list.component';
import { FoundSomethingComponent } from './found-items/found-something/found-something.component';
import { FoundItemDetailsComponent } from './found-items/found-item-details/found-item-details.component';
import { ItemTypeDetailsComponent } from './item-types/item-type-details/item-type-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditFoundItemComponent } from './found-items/edit-found-item/edit-found-item.component';
import { FoundItemsByStationComponent } from './found-items/found-items-by-station/found-items-by-station.component';
import { ItemSearchComponent } from './found-items/item-search/item-search.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  declarations: [FoundItemsListComponent,
    NewFoundItemComponent,
    ReportLostItemComponent,
    ItemAttributesListComponent,
    AddAttributesComponent,
    AddItemTypeComponent,
    ItemTypesComponent,
    LostItemsListComponent,
    FoundSomethingComponent,
    FoundItemDetailsComponent,
    ItemTypeDetailsComponent,
    EditFoundItemComponent,
    FoundItemsByStationComponent,
    ItemSearchComponent ],

  providers: [
    FoundItemsService,
    LostItemsService,
    ItemAttributesService,
    ItemTypesService
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    Ng2IziToastModule
  ],

  exports: [
    FoundItemDetailsComponent,
    ItemSearchComponent
  ]
})
export class ItemsModule { }
