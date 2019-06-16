import { Component, OnInit } from '@angular/core';
import { ItemTypesService } from '../../services/item-types.service';

@Component({
  selector: 'app-item-type-details',
  templateUrl: './item-type-details.component.html',
  styleUrls: ['./item-type-details.component.css']
})
export class ItemTypeDetailsComponent implements OnInit {
  
  itemType: any;

  constructor(private itemTypeService: ItemTypesService) { }

  ngOnInit() {
  }

  getItemType(id: any) {
    this.itemTypeService.getItemType(id)
      .subscribe(response => {
        this.itemType = response;
      });
  }

}
