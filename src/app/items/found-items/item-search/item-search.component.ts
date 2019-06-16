import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SearchItemsService } from '../../services/search-items.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  items: any;
  public searchFIForm: FormGroup;
  message: string;
  searchKW: string;
  length: number;
  modalRef: BsModalRef;
  selectedItem;

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
        } else {this.message = ` No results for "${this.searchFIForm.value.attributeVal}"`; }
        console.log(response);
      },
      err => {
        this.message = ` No results for "${this.searchFIForm.value.attributeVal}"`;
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
