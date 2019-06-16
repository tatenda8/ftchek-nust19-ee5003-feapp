import { Component, OnInit } from '@angular/core';
import { ItemTypesService } from '../../services/item-types.service';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-item-types',
  templateUrl: './item-types.component.html',
  styleUrls: ['./item-types.component.css']
})
export class ItemTypesComponent implements OnInit {

  list: any;
  size: number;
  total: number;
  page: any;

  constructor(private itemTypesService: ItemTypesService,
              private router: Router,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.getItemTypes();
  }

  private getItemTypes() {
    this.itemTypesService.getAllItemTypes('0')
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  public pageChanged(page) {

    this.itemTypesService.getAllItemTypes((page - 1).toString())
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  deleteType(id: any) {
    this.itemTypesService.deleteItemType(id)
      .subscribe(() => {
        this.iziToast.success({    
          title: 'OK',
        message: `Category Successfully Deleted! Please refresh page`,
        position: 'center',
         overlay: true, 
      });
        },
      err => {
        this.iziToast.error({    title: 'Error',
         message: `Error! Could not delete. \n The item may have already been deleted. \n Please refresh page `,
        position: 'center',
        overlay: true});
      });
  }
}
