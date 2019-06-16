import { Component, OnInit } from '@angular/core';
import { LostItemsService } from '../../services/lost-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lost-items-list',
  templateUrl: './lost-items-list.component.html',
  styleUrls: ['./lost-items-list.component.css']
})
export class LostItemsListComponent implements OnInit {

  list: any;
  size: number;
  total: number;
  page: any;


  constructor(private lostItemsService: LostItemsService,
              private router: Router) { }

  ngOnInit() {
    this.getFoundItems();
  }

  private getFoundItems() {
    this.lostItemsService.getAllLostItems('0')
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

  public pageChanged(page) {
    console.log(page);

    this.lostItemsService.getAllLostItems((page - 1).toString())
      .subscribe(response => {
        this.list = response['content'];
        this.size = response.size;
        this.page = (response.number + 1);
        this.total = response.totalElements;
        console.log(response);
      });
  }

onDelete() {

}


  delete(id: any) {
    this.lostItemsService.deleteLostItem(id)
      .subscribe(() => {
      this.router.navigate(['/admin/lost-items']);
    });
  }
}
