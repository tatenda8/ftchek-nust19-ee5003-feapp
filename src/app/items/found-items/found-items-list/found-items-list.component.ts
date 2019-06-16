import { Component, OnInit, TemplateRef } from '@angular/core';
import { FoundItemsService } from '../../services/found-items.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-found-items-list',
  templateUrl: './found-items-list.component.html',
  styleUrls: ['./found-items-list.component.css']
})
export class FoundItemsListComponent implements OnInit {

  list: any;
  size: number;
  total: number;
  page: any;
  modalRef: BsModalRef;
  selectedItem;
  
  constructor(private modalService: BsModalService, private foundItemsService: FoundItemsService,
              private router: Router) { }

  ngOnInit() {
    this.getFoundItems();
  }

  private getFoundItems() {
    this.foundItemsService.getAllFoundItems('0')
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
        console.log(localStorage.getItem('user'));
      });
  }

  public pageChanged(page) {
    console.log(page);

    this.foundItemsService.getAllFoundItems((page - 1).toString())
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  // deleteItem(id: any) {
  //   this.foundItemsService.deleteFoundItem(id)
  //     .subscribe(() => {
  //     this.router.navigate(['/found-items']);
  //   });
  // }

  openModal(selectedItem,template: TemplateRef<any>) {
    console.log(selectedItem);
    this.selectedItem = selectedItem;
    this.modalRef = this.modalService.show(template);
  }
}
