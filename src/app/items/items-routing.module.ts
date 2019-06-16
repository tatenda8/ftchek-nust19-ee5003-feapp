import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportLostItemComponent } from './lost-items/report-lost-item/report-lost-item.component';
import { FoundItemsListComponent } from './found-items/found-items-list/found-items-list.component';
import { NewFoundItemComponent } from './found-items/new-found-item/new-found-item.component';
import { LostItemsListComponent } from './lost-items/lost-items-list/lost-items-list.component';
import { FoundSomethingComponent } from './found-items/found-something/found-something.component';
import { ItemAttributesListComponent } from './item-attributes/item-attributes-list/item-attributes-list.component';
import { ItemTypesComponent } from './item-types/item-types/item-types.component';
import { AddAttributesComponent } from './item-attributes/add-attributes/add-attributes.component';
import { AddItemTypeComponent } from './item-types/add-item-type/add-item-type.component';
import { FoundItemDetailsComponent } from './found-items/found-item-details/found-item-details.component';
import { ItemSearchComponent } from './found-items/item-search/item-search.component';

const routes: Routes = [
  {path: 'report-lost-item', component: ReportLostItemComponent},
  {path: 'found-items', component: FoundItemsListComponent},
  {path: 'new-found-item', component: NewFoundItemComponent},
  {path: 'lost-items', component: LostItemsListComponent},
  {path: 'found-something', component: FoundSomethingComponent},
  {path: 'item-attributes', component: ItemAttributesListComponent},
  {path: 'categories', component: ItemTypesComponent},
  {path: 'add-item-attribute', component: AddAttributesComponent},
  {path: 'add-item-type', component: AddItemTypeComponent},
  {path : 'item-search', component: ItemSearchComponent, children: [
    {path: '', component: FoundItemDetailsComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
