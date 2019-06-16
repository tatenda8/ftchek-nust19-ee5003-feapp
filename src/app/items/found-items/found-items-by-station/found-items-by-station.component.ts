import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FoundItemsService } from '../../services/found-items.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-found-items-by-station',
  templateUrl: './found-items-by-station.component.html',
  styleUrls: ['./found-items-by-station.component.css']
})
export class FoundItemsByStationComponent implements OnInit {

  list: any;

  constructor(private modalService: BsModalService,
              private foundItemsService: FoundItemsService,
              private router: Router,
              public iziToast: Ng2IzitoastService) { }

 ngOnInit() {
this.getFoundItems();
}

private getFoundItems() {
this.foundItemsService.getFoundItemsByStation(localStorage.getItem('stationId'))
.subscribe(response => {
this.list = response;
console.log(response);
});
}



// openModal(selectedItem,template: TemplateRef<any>) {
// console.log(selectedItem);
// this.selectedItem = selectedItem;
// this.modalRef = this.modalService.show(template);
// }

onDelete(id: any) {
  this.iziToast.question({
    timeout: 0,
    close: false,
    overlay: true,
     id: 'question',
     zindex: '999',
     title: 'Delete',
     message: 'Are you sure you want to delete this item?',
     position: 'center',
     buttons: [        ['<button><b>YES</b></button>', (instance, toast) => {
       this.deleteItem(id);
       instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

     }
    , true],

    ['<button>NO</button>', function(instance, toast) {
    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

  }], ]
})
}


deleteItem(id: any) {
  this.foundItemsService.deleteFoundItem(id)
    .subscribe(() => {
    
    this.iziToast.success({    title: 'OK',
    message: `Item Successfully Deleted! Please refresh page`,
    position: 'center',
     overlay: true, 
  });
    },
  err => {
    this.iziToast.error({    title: 'Error',
     message: `Error! Item Not Found`,
    position: 'center',
    overlay: true});
    this.router.navigate(['portal/found-items']);
  });
}

}
