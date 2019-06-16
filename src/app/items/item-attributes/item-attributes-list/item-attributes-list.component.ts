import { Component, OnInit } from '@angular/core';
import { ItemAttributesService } from '../../services/item-attributes.service';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-item-attributes-list',
  templateUrl: './item-attributes-list.component.html',
  styleUrls: ['./item-attributes-list.component.css']
})
export class ItemAttributesListComponent implements OnInit {

  list: any;
  size: number;
  total: number;
  page: any;

  constructor(private itemAttributesService: ItemAttributesService,
              private router: Router,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.getItemAttributes();
  }

  private getItemAttributes() {
    this.itemAttributesService.getAllItemAttributes('0')
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  public pageChanged(page) {

    this.itemAttributesService.getAllItemAttributes((page - 1).toString())
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });

  }

  deleteAttrib(id: any) {
    this.itemAttributesService.deleteItemAttribute(id)
      .subscribe(() => {
        this.iziToast.success({    title: 'OK',
        message: `Attribute Successfully Deleted! Please refresh page`,
        position: 'center',
         overlay: true, 
      });
        },
      err => {
        this.iziToast.error({    title: 'Error',
         message: `Error! Could not delete. \n The item may have been deleted already. \n Please refresh page `,
        position: 'center',
        overlay: true});
      });
  }

}
