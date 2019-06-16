import { Component, OnInit } from '@angular/core';
import { FoundItemsService } from '../../services/found-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found-item-details',
  templateUrl: './found-item-details.component.html',
  styleUrls: ['./found-item-details.component.css']
})
export class FoundItemDetailsComponent implements OnInit {

  item: any;

  constructor(private foundItemsService: FoundItemsService,
              private router: Router,
              ) { }

  ngOnInit() {
  }

  getFoundItem(id: any) {
    this.foundItemsService.getFoundItem(id)
      .subscribe(response => {
        this.item = response;
      });
  }

 
}
