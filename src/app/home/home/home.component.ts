import { Component, OnInit, TemplateRef } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SearchItemsService } from '../../items/services/search-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  public searchFIForm: FormGroup;
  message: string;
  searchKW: string;
  length: number;
  modalRef: BsModalRef;
  selectedItem;
  welcome: boolean;

  constructor(private searchItemsService: SearchItemsService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.createSearchForm();
  }

  private createSearchForm() {
    this.searchFIForm = new FormGroup({
      attributeVal: new FormControl('', Validators.required)
    });
  }

  searchFoundItem() {
    this.searchItemsService.searchFoundItems(this.searchFIForm.value)
      .subscribe(response => {
        // this.list = response['content'];
        // this.size = response.size;
        // this.page = (response.number + 1);
        // this.total = response.totalElements;
        this.items = response;
        this.message = ``;
        this.length = response.length;
        if (response.length > 0) {
        this.searchKW = `Showing results for "${this.searchFIForm.value.attributeVal}"`;
        this.welcome = true;
        } else {this.message = ` No results for "${this.searchFIForm.value.attributeVal}"`; }
        this.welcome = true;
      },
      err => {
        this.message = ` No results for "${this.searchFIForm.value.attributeVal}"`;
        this.welcome = true;
       // console.log('"no items found"');
        // this.router.navigate(['/login']);
        });
  }


  openModal(selectedItem, template: TemplateRef<any>) {
    console.log(selectedItem);
    this.selectedItem = selectedItem;
    this.modalRef = this.modalService.show(template);
  }

}
